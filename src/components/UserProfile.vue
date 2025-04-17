<template>
  <div>
    <navbar></navbar>

    <div class="container">
      <hr />

      <!-- Profile Header -->
      <div class="profile-header">
        <div class="profile-pic-wrapper">
          <img
            id="profile-picture"
            :src="user.photoURL || defaultPhoto"
            alt="Profile Picture"
          />

          <!-- Edit photo only visible in edit mode -->
          <div v-if="editMode" class="edit-photo-controls">
            <label class="edit-photo-label">
              Edit Photo
              <input
                type="file"
                accept="image/png, image/jpeg"
                @change="handlePhotoUpload"
                hidden
              />
            </label>
          </div>
        </div>

        <div class="nickname-section">
          <div v-if="!editMode">
            <h2>{{ user.nickname || "No nickname yet" }}</h2>
          </div>
          <div v-else>
            <label>Nickname</label>
            <input
              v-model="editedUser.nickname"
              placeholder="Enter a nickname"
              style="width: 100%; padding: 8px; border-radius: 5px; margin-bottom: 10px;"
            />
          </div>
        </div>
      </div>

      <!-- About Me -->
      <h3>About Me</h3>
      <div class="description" v-if="!editMode">
        <p>{{ user.about }}</p>
      </div>
      <div class="description" v-else>
        <label>About Me</label>
        <textarea v-model="editedUser.about" rows="4" style="width: 100%;"></textarea>
      </div>

      <!-- Sports -->
      <h3>Sports</h3>
      <div class="my-sports" v-if="!editMode">
        <ul>
          <li v-for="sport in user.sports" :key="sport">{{ sport }}</li>
        </ul>
      </div>
      <div class="my-sports" v-else>
        <label>Sports (comma-separated)</label>
        <input
          v-model="editedUser.sportsInput"
          placeholder="e.g. Tennis, Football"
          style="width: 100%; padding: 8px; border-radius: 5px;"
        />
        <p><strong>Preview:</strong> {{ editedUser.sportsInput.split(',').map(s => s.trim()).join(', ') }}</p>
      </div>

      <!-- Email -->
      <h3>Email</h3>
      <div class="email-box">
        <p>{{ user.email || "No email available" }}</p>
      </div>

      <!-- Buttons -->
      <button type="edit" v-if="!editMode" @click="startEditing">Edit Profile</button>
      <div v-else>
        <button type="edit" @click="saveChanges">Save</button>
        <button type="edit" @click="cancelEditing">Cancel</button>
      </div>

      <hr />
      <div class="my-listing"><h2>My Listings</h2></div>

      <!-- Listings You Created -->
      <h3>You Created</h3>
      <ul class="sports-list">
        <li class="sport-card" v-for="(listing, index) in createdListings" :key="listing.id">
          <div class="sport-title">{{ listing.title }}</div>
          <div class="sport-details">
            <p><span class="highlight">Location:</span> {{ listing.location }}</p>
            <p><span class="highlight">Time:</span> {{ formatTime(listing.time) }}</p>
            <div class="extra-details" v-show="listing.showDetails">
              <p><span class="highlight">Players Needed:</span> {{ listing.playersNeeded }}</p>
              <p><span class="highlight">Cost:</span> {{ listing.cost }}</p>
              <p><span class="highlight">Experience:</span> {{ listing.experience }}</p>
              <p v-if="listing.description"><span class="highlight">Description:</span> {{ listing.description }}</p>
            </div>
            <button class="toggle-btn" @click="listing.showDetails = !listing.showDetails">
              {{ listing.showDetails ? 'Less ⬆️' : 'More ⬇️' }}
            </button>
          </div>
        </li>
      </ul>

      <!-- Listings You Joined -->
      <h3>You Joined</h3>
      <ul class="sports-list">
        <li class="sport-card" v-for="(listing, index) in joinedListings" :key="index">
          <div class="sport-title">{{ listing.title }}</div>
          <div class="sport-details">
            <p><span class="highlight">Location:</span> {{ listing.location }}</p>
            <p><span class="highlight">Time:</span> {{ formatTime(listing.time) }}</p>
            <div class="extra-details" v-show="listing.showDetails">
              <p><span class="highlight">Players Needed:</span> {{ listing.playersNeeded }}</p>
              <p><span class="highlight">Cost:</span> {{ listing.cost }}</p>
              <p><span class="highlight">Experience:</span> {{ listing.experience }}</p>
              <p v-if="listing.description"><span class="highlight">Description:</span> {{ listing.description }}</p>
            </div>
            <button class="toggle-btn" @click="listing.showDetails = !listing.showDetails">
              {{ listing.showDetails ? 'Less ⬆️' : 'More ⬇️' }}
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { db } from "@/firebase";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";


export default {
  components: { Navbar },
  name: "UserProfile",
  data() {
    return {
      editMode: false,
      userId: null,
      user: {
        nickname: "",
        about: "",
        sports: [],
        photoURL: "",
      },
      editedUser: {
        about: "",
        sportsInput: "",
      },
      joinedListings: [],
      createdListings: [],
      defaultPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOk8qE9ecVIYpm7FH-llQ7EWtS59dttOzza3xloSHG7nTKFW5cWU0KFwvm-1gCgRXKGk&usqp=CAU",
    };
  },
  async created() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.userId = user.email;
        this.user.email = user.email;
        await this.fetchUserProfile();
        await this.fetchJoinedListings();
        await this.fetchCreatedListings();
      }
    });
  },

  methods: {
    formatTime(isoString) {
      const date = new Date(isoString);
    
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${day}/${month}/${year} ${hours}:${minutes}`;
    },

    async fetchUserProfile() {
      try {
        const docRef = doc(db, "users", this.userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          this.user.about = data.about || "";
          this.user.sports = data.sports || [];
          this.user.nickname = data.nickname || "";
          this.user.photoURL = data.photoURL || ""; // ✅ Add this
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    },

    async fetchJoinedListings() {
      try {
        const userDoc = await getDoc(doc(db, "users", this.userId));
        if (userDoc.exists()) {
          const joinedChats = userDoc.data().joinedChats || [];
          const joinedListings = [];

          for (const entry of joinedChats) {
            const listingId = typeof entry === "string" ? entry : entry.id;

            if (!listingId) continue;

            const listingRef = doc(db, "listings", listingId);
            const listingSnap = await getDoc(listingRef);

            if (listingSnap.exists()) {
              joinedListings.push({
                id: listingId,
                ...listingSnap.data(),
                showDetails: false
              });
            } else {
              console.warn(`❗ Listing not found for ID: ${listingId}`);
            }
          }

          this.joinedListings = joinedListings;
        }
      } catch (error) {
        console.error("Error fetching joined listings:", error);
      }
    },

    async fetchCreatedListings() {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(listingsRef, where("ownerId", "==", this.userId));
        const querySnapshot = await getDocs(q);
        const joinedIds = this.joinedListings.map(l => l.id);

        this.createdListings = querySnapshot.docs.map((doc) => {
          const id = doc.id; // ✅ define it here
          return {
            id,
            ...doc.data(),
            showDetails: false,
            joined: joinedIds.includes(id) // ✅ use it here
          };
        });
      } catch (error) {
        console.error("Error fetching created listings:", error);
      }
    },

    async joinListing(listingId) {
      try {
        if (!this.userId) {
          alert("You must be logged in to join.");
          return;
        }

        // Get the listing data first
        const listingRef = doc(db, "listings", listingId);
        const listingSnap = await getDoc(listingRef);

        if (!listingSnap.exists()) {
          alert("This listing no longer exists.");
          return;
        }

        const listingData = listingSnap.data();

        // 🚫 Prevent joining your own listing
        if (listingData.ownerId === this.userId) {
          alert("You can't join your own listing.");
          return;
        }

        // Proceed with join logic
        const userRef = doc(db, "users", this.userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data() || {};
        const joinedChats = userData.joinedChats || [];

        const alreadyJoined = joinedChats.some(
          (entry) => (typeof entry === "object" ? entry.id : entry) === listingId
        );

        if (alreadyJoined) {
          alert("You already joined this listing.");
          return;
        }

        joinedChats.push({
          id: listingId,
          title: listingData.title,
          time: listingData.time
        });
        await setDoc(userRef, {
          ...userData,
          joinedChats
        });

        alert("✅ Successfully joined listing!");
        await this.fetchJoinedListings();
      } catch (error) {
        console.error("❌ Failed to join listing:", error);
        alert("Something went wrong. Please try again.");
      }
    },

    startEditing() {
      this.editMode = true;
      this.editedUser.nickname = this.user.nickname;
      this.editedUser.about = this.user.about;
      this.editedUser.sportsInput = Array.isArray(this.user.sports)
        ? this.user.sports.join(", ")
        : "";
    },

    cancelEditing() {
      // Confirm before canceling
      const confirmCancel = confirm("Are you sure you want to discard the changes to your profile?");
      if (confirmCancel) {
        // If confirmed, restore the original data and exit edit mode
        this.editMode = false;
        this.editedUser.nickname = this.user.nickname;
        this.editedUser.about = this.user.about;
        this.editedUser.sportsInput = this.user.sports.join(", ");
      }
    },

    async saveChanges() {
      if (!confirm("Are you sure you want to save changes to your profile?")) return;

      // Update Firebase
      this.user.nickname = this.editedUser.nickname;
      this.user.about = this.editedUser.about;

      const input = this.editedUser.sportsInput || "";
      this.user.sports = input
        .split(",")
        .map(s => s.trim())
        .filter(s => s.length > 0);

      try {
        const userRef = doc(db, "users", this.userId);
        const userSnap = await getDoc(userRef);

        const existingData = userSnap.exists() ? userSnap.data() : {};

        const updatedUserData = {
          ...existingData, // ✅ Preserve fields like joinedChats, etc.
          nickname: this.user.nickname,
          about: this.user.about,
          sports: this.user.sports,
          photoURL: this.user.photoURL || this.defaultPhoto // ✅ Ensure photo is saved
        };

        await setDoc(userRef, updatedUserData);

         // Update auth
        const auth = getAuth();
        const currentUser = auth.currentUser;
        if (currentUser) {
          await updateProfile(currentUser, {
            displayName: this.user.nickname,
            // photoURL: this.user.photoURL || this.defaultPhoto
          });
        }

        this.editMode = false;
        alert("✅ Profile updated successfully!");
      } catch (error) {
        console.error("❌ Error saving profile:", error);
        alert("Something went wrong while saving.");
      }
    },

    async handlePhotoUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a JPG or PNG file.");
        return;
      }

      if (file.size > 500 * 1024) { // 500KB limit
        alert("Please select an image smaller than 500KB");
        return;
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target.result;

        // Update local state
       this.user.photoURL = base64Image;

        // ✅ Save to Firestore
        try {
          const userRef = doc(db, "users", this.userId);

          // First get current user data
          const userSnap = await getDoc(userRef);
          const userData = userSnap.exists() ? userSnap.data() : {};

          // Update with photo
          await setDoc(userRef, {
            ...userData,
            photoURL: base64Image
          });
        } catch (error) {
          console.error("❌ Error saving profile photo:", error);
          alert("Failed to save profile photo.");
        }
      };

      reader.readAsDataURL(file);
    }
  },
};
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
  }
  
  .container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 350px;
    margin: 10px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    color: #5c2b87;
    margin-bottom: 20px;
  }
  
  h3 {
    color: #744c97;
  }
  
  hr {
    border-top: 0.5px solid #744c97;
  }
  
  #profile-picture {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .my-sports ul {
    list-style: none;
    padding: 0;
  }
  
  .my-sports li {
    background-color: #e1dfdfc4;
    padding: 8px;
    border-radius: 5px;
    margin: 2px;
    display: inline-block;
  }
  
  .description {
    margin: 10px 20px;
    text-align: left;
    padding: 10px;
    background-color: #e1dfdfc4;
    border-radius: 8px;
    line-height: 1.5;
  }

  .email-box {
    margin: 10px 20px;
    text-align: center;
    padding: 1px;
    background-color: #e1dfdfc4;
    border-radius: 8px;
    line-height: 1.5;
  }
  
  .sports-list {
    list-style: none;
    padding: 0;
  }

  textarea {
    resize: vertical;
}

  
  .sport-card {
    background-color: #e1dfdfc4;
    border-left: 5px solid #744c97;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    text-align: left;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .sport-title {
    font-size: 20px;
    font-weight: bold;
    color: #5c2b87;
  }
  
  .sport-details {
    font-size: 14px;
    color: #333;
    margin-top: 5px;
  }
  
  .highlight {
    color: #744c97;
    font-weight: bold;
  }
  
  button[type="edit"] {
    width: auto;
    padding: 10px 20px;
    background: #744c97;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px 10px;
  }
  
  button[type="edit"]:hover {
    background: #5c2b87;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    color: #5c2b87;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
    display: block;
    text-align: left;
  }
  
  .navbar {
    background-color: #744c97;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
  }
  
  .nav-left {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
    margin-right: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #ddd;
  }
  
  .list-button {
    background-color: #3c9c65;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .list-button:hover {
    background-color: #2f7f50;
    transform: scale(1.05);
  }
  
  .list-button:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 600px) {
    .navbar {
      flex-direction: column;
      text-align: center;
    }
  
    .nav-links {
      margin-top: 10px;
      flex-direction: column;
      gap: 10px;
    }
  
    .container {
      width: 90%;
    }
  }
    .profile-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
      justify-content: center;
    }
    .profile-pic-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .edit-photo-controls {
      margin-top: 8px;
    }

    .edit-photo-label {
      background-color: #744c97;
      color: white;
      padding: 6px 14px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      font-size: 14px;
      display: inline-block;
    }

    #profile-picture {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #744c97;
    }

  </style>
  