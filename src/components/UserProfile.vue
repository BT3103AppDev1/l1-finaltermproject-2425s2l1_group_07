<template>
    <div>
        <navbar></navbar>
  
      <div class="container">
        <div v-if="!editMode">
          <img :src="user.profilePicture" alt="Profile Picture" id="profile-picture" />
        </div>
        <div v-else>
          <input
            v-model="editedUser.profilePicture"
            placeholder="Profile picture URL"
            style="width: 100%; padding: 8px; margin-bottom: 10px; border-radius: 5px;"
          />
          <img :src="editedUser.profilePicture" alt="Preview" id="profile-picture" />
        </div>
  
        <h2>@{{ user.username }}</h2>
        <hr />
  
        <h3>About Me</h3>
        <div class="description" v-if="!editMode">
          <p>{{ user.about }}</p>
        </div>
        <div class="description" v-else>
          <textarea v-model="editedUser.about" rows="4" style="width: 100%;"></textarea>
        </div>
  
        <h3>Sports</h3>
        <div class="my-sports" v-if="!editMode">
          <ul>
            <li v-for="sport in user.sports" :key="sport">{{ sport }}</li>
          </ul>
        </div>
        <div class="my-sports" v-else>
          <input
            v-model="editedUser.sportsInput"
            placeholder="Enter sports (comma-separated)"
            style="width: 100%; padding: 8px; border-radius: 5px;"
          />
        </div>
  
        <button type="edit" v-if="!editMode" @click="startEditing">Edit Profile</button>
        <div v-else>
          <button type="edit" @click="saveChanges">Save</button>
          <button type="edit" @click="cancelEditing">Cancel</button>
        </div>
  
        <hr />
        <div class="my-listing"><h2>My Listings</h2></div>
  
        <ul class="sports-list">
          <li class="sport-card" v-for="(listing, index) in listings" :key="index">
            <div class="sport-title">{{ listing.title }}</div>
            <div class="sport-details">
              <p><span class="highlight">Location:</span> {{ listing.location }}</p>
              <p><span class="highlight">Time:</span> {{ listing.time }}</p>
              <div class="extra-details" v-show="listing.showDetails">
                <p><span class="highlight">Players Needed:</span> {{ listing.playersNeeded }}</p>
                <p><span class="highlight">Cost:</span> {{ listing.cost }}</p>
                <p><span class="highlight">Experience Level:</span> {{ listing.experience }}</p>
              </div>
              <button class="toggle-btn" @click="toggleDetails(index)">
                {{ listing.showDetails ? 'Less ⬆️' : 'More ⬇️' }}
              </button>
            </div>
            <button type="edit">Edit</button>
            <button type="edit">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";

  export default {
    components: {
      Navbar // Register Navbar component
    },
    name: "UserProfile",
    data() {
      return {
        editMode: false,
        userId: "janedoe", // Replace with auth user UID in real app
        user: {
          username: "janedoe",
          profilePicture: "",
          about: "",
          sports: [],
        },
        editedUser: {
          profilePicture: "",
          about: "",
          sportsInput: "",
        },
        listings: [
          {
            title: "Basketball 3v3",
            location: "NUS Sports Hall",
            time: "25/02/2025 6:00 PM",
            playersNeeded: 6,
            cost: "Free",
            experience: "⭐⭐⭐",
            showDetails: false,
          },
          {
            title: "Soccer Match",
            location: "UTown Field",
            time: "25/02/2025 7:30 PM",
            playersNeeded: 12,
            cost: "Free",
            experience: "⭐⭐⭐⭐⭐",
            showDetails: false,
          },
        ],
      };
    },
    async created() {
      await this.fetchUserProfile();
    },
    methods: {
      async fetchUserProfile() {
        try {
          const docRef = doc(db, "users", this.userId);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const data = docSnap.data();
            this.user.profilePicture = data.profilePicture || "";
            this.user.about = data.about || "";
            this.user.sports = data.sports || [];
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      },
      startEditing() {
        this.editMode = true;
        this.editedUser.about = this.user.about;
        this.editedUser.profilePicture = this.user.profilePicture;
        this.editedUser.sportsInput = this.user.sports.join(", ");
      },
      async saveChanges() {
        this.user.about = this.editedUser.about;
        this.user.profilePicture = this.editedUser.profilePicture;
        this.user.sports = this.editedUser.sportsInput
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s);
  
        try {
          await setDoc(doc(db, "users", this.userId), {
            username: this.user.username,
            profilePicture: this.user.profilePicture,
            about: this.user.about,
            sports: this.user.sports,
          });
          this.editMode = false;
        } catch (error) {
          console.error("Error saving profile:", error);
        }
      },
      cancelEditing() {
        this.editMode = false;
      },
      toggleDetails(index) {
        this.listings[index].showDetails = !this.listings[index].showDetails;
      },
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
  
  .sports-list {
    list-style: none;
    padding: 0;
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
  </style>
  