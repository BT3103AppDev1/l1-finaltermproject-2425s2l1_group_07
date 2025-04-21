<template>
  <div>
    <navbar></navbar>

    <div class="container">
      <h1 class="explore-header">Explore Matches</h1>
      <hr />

      <!-- Search Bar -->
      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          class="search-bar"
          placeholder="Search for matches..."
        />
      </div>

      <!-- Filter Dropdowns -->
      <div class="filter-container" v-if="upcomingMatches.length > 0">
        <select v-model="selectedSport" class="filter-dropdown">
          <option value="">All Sports</option>
          <option v-for="sport in sportsTypes" :key="sport" :value="sport">
            {{ sport }}
          </option>
        </select>

        <select v-model="selectedLocation" class="filter-dropdown">
          <option value="">All Locations</option>
          <option
            v-for="location in locations"
            :key="location"
            :value="location"
          >
            {{ location }}
          </option>
        </select>

        <select v-model="selectedExperience" class="filter-dropdown">
          <option value="">All Experience Levels</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <!-- Grouped Listings -->

      <div class="toggle-container">
        <label>
          <input type="checkbox" v-model="hideExpired" />
          Hide expired matches
        </label>
      </div>

      <h2 class="section-header">Upcoming Matches</h2>
      <ul class="sports-list">
        <li v-for="match in upcomingMatches" :key="match.id" class="sport-card">
          <div class="sport-title">{{ match.title }}</div>
          <div class="sport-details">
            <p>
              <span class="highlight">Sport Type:</span> {{ match.sportType }}
            </p>
            <p><span class="highlight">Location:</span> {{ match.location }}</p>
            <p><span class="highlight">Time:</span> {{ formatTime(match.time) }}</p>
            <p>
              <span class="highlight">Players Needed:</span>
              {{ match.playersNeeded }}
            </p>
            <p><span class="highlight">Cost:</span> {{ match.cost }}</p>
            <p>
              <span class="highlight">Experience Level:</span>
              {{ match.experience }}
            </p>
            <p>
              <span class="highlight">Description:</span>
              {{ match.description }}
            </p>
            <button class="fav-btn" @click="addToFavourites(match)">
              Add to Favourites
            </button>
            <button class="chat-btn" @click="joinChat(match)">Join Chat</button>
          </div>
        </li>
      </ul>

      <h2 class="section-header faded" v-if="!hideExpired">Past Matches</h2>
      <ul class="sports-list" v-if="!hideExpired">
        <li
          v-for="match in pastMatches"
          :key="match.id"
          class="sport-card expired-card"
        >
          <div class="expired-overlay">Expired</div>
          <div class="sport-title">{{ match.title }}</div>
          <div class="sport-details">
            <p>
              <span class="highlight">Sport Type:</span> {{ match.sportType }}
            </p>
            <p><span class="highlight">Location:</span> {{ match.location }}</p>
            <p><span class="highlight">Time:</span> {{ match.time }}</p>
            <p>
              <span class="highlight">Players Needed:</span>
              {{ match.playersNeeded }}
            </p>
            <p><span class="highlight">Cost:</span> {{ match.cost }}</p>
            <p>
              <span class="highlight">Experience Level:</span>
              {{ match.experience }}
            </p>
            <p>
              <span class="highlight">Description:</span>
              {{ match.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { auth } from '@/firebase';
import { getAuth } from "firebase/auth";
import { db } from "@/firebase.js";
import Navbar from "@/components/Navbar.vue";

function parseDate(dateStr) {
  if (typeof dateStr !== "string") return new Date(); // fallback

  // Case 1: ISO format → parse directly
  if (dateStr.includes("T")) {
    return new Date(dateStr);
  }
  // Case 2: DD/MM/YYYY HH:mm
  const [datePart, timePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
}
export default {
  components: { Navbar },
  data() {
    return {
      matches: [],
      searchQuery: "",
      selectedSport: "",
      selectedLocation: "",
      selectedExperience: "",
      sportsTypes: [],
      locations: [],
      hideExpired: false,
    };
  },
  created() {
    this.fetchListings();
  },
  computed: {
    upcomingMatches() {
      return this.matches
        .filter((match) => !match.expired && this.matchPassesFilters(match))
        .sort((a, b) => new Date(a.time) - new Date(b.time));
    },
    pastMatches() {
      return this.matches
        .filter((match) => match.expired)
        .sort((a, b) => new Date(a.time) - new Date(b.time));
    },
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

    matchPassesFilters(match) {
      const matchesSearch =
        match.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        match.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        match.description
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());

      const matchesSport = this.selectedSport
        ? match.sportType === this.selectedSport
        : true;
      const matchesLocation = this.selectedLocation
        ? match.location === this.selectedLocation
        : true;
      const matchesExperience = this.selectedExperience
        ? match.experience == this.selectedExperience
        : true;

      return (
        matchesSearch && matchesSport && matchesLocation && matchesExperience
      );
    },
    async fetchListings() {
      try {
        const listingsRef = collection(db, "listings");
        const snapshot = await getDocs(listingsRef);

        this.matches = snapshot.docs.map((doc) => {
          let data = doc.data();

          if (!data.sportType) {
            data.sportType = data.title;
          }

          const expiryDate = parseDate(data.time);
          data.expired = expiryDate < new Date();

          return {
            id: doc.id,
            ...data,
          };
        });

        const upcoming = this.matches.filter((m) => !m.expired);

        this.sportsTypes = [...new Set(upcoming.map((match) => match.sportType))];
        this.locations = [...new Set(upcoming.map((match) => match.location))];

      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    },
    async getCurrentUserEmail() {
          const user = auth.currentUser;
          if (user) {
              return user.email; 
          } else {
              throw new Error("No user is currently logged in.");
          }

          // return 'test@email.com'; // test functionality
      },

    async addToFavourites(listing) {
      const userEmail = await this.getCurrentUserEmail?.(); // Adjust if getCurrentUserEmail is not defined
      const userRef = doc(db, "users", userEmail);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        console.error("User not found!");
        return;
      }

      let favourites = userSnap.data().favourites || [];

      if (favourites.includes(listing.id)) {
        alert("Already in favourites!");
        return;
      }

      favourites.push(listing.id);
      await updateDoc(userRef, { favourites });
      alert("Added to favourites!");
    },

    async joinChat(match) {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user || !user.email) {
        alert("User not authenticated");
        return;
      }

      const userEmail = user.email;
      const userRef = doc(db, "users", userEmail);
      let userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          joinedChats: [],
          favourites: [],
          name: user.displayName || "",
        });

        userSnap = await getDoc(userRef);
      }

      const userData = userSnap.data();
      let joinedChats = userData?.joinedChats || [];

      if (joinedChats.some((chat) => chat.id === match.id)) {
        alert("Already joined this chat!");
        return;
      }

      joinedChats.push({
        id: match.id,
        title: match.title,
        time: match.time,
      });

      await setDoc(userRef, { joinedChats }, { merge: true });

      alert(`Joined ${match.title} chat!`);
      this.$router.push("/chats");
    },
  },
};
</script>

<style scoped>

html, body {
  background-color: lightblue !important;
  height: 100%;
  margin: 0;
  padding: 0;
}


.container {
    background-image: url('@/assets/landing bgnd.jpg');
    background-size: cover;
    background-position: center;
    font-family: 'Roboto', sans-serif;
    color: #333333;
    line-height: 1.6;
    margin: 50px 190px;
}

.container {
  margin: 50px 190px;
}

h1 {
  color: #5c2b87;
  text-align: center;
}

/* General container styling */
.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Dropdown (select) styling */
.filter-container select {
  padding: 5px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #696969;
}

.filter-container select:hover {
  border-color: #3c9c65;
}

.filter-container button {
  padding: 7.5px 15px;
  font-size: 16px;
  background-color: #3c9c65;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-container button:hover {
  background-color: rgb(45, 111, 73);
}

.search-container {
  position: relative;
  width: 35vw;
  margin: 20px;
}

.search-bar:hover {
  border-color: #3c9c65;
}

.search-bar {
  width: 100%;
  padding: 10px 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: gray;
  cursor: pointer;
}

.explore-header {
  align-items: left;
  align-content: left;
  justify-content: left;
  display: flex;
}

.sports-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 30px;
  padding: 0;
}

.sport-card {
  flex: 0 1 calc(50% - 30px); /* 2 cards per row minus gap */
  box-sizing: border-box;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}


.fav-btn {
  background-color: #5c2b87;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: background-color 0.3s;
}

.fav-btn:hover {
  background-color: #744c97;
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

.chat-btn {
  background-color: #5c2b87;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: block;
  margin: 10px 0;
  transition: background-color 0.3s;
}

.chat-btn:hover {
  background-color: #744c97;
}

.extra-details {
  display: none; /* Hide details by default */
  margin-top: 5px;
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
/* Search bar styling */
.search-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar {
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.filter-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}

.filter-dropdown {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.sports-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 55px;
  padding: 0;
}

.sport-card {
  background-color: white;
  border-left: 5px solid #744c97;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: calc(50% - 20px);
  max-width: 500px;
  box-sizing: border-box;
}

.fav-btn {
  background-color: #5c2b87;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: background-color 0.3s;
}

.fav-btn:hover {
  background-color: #744c97;
}

.expired-card {
  filter: blur(2px);
  opacity: 0.6;
  pointer-events: none;
  position: relative;
}

.expired-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.7);
  color: red;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 6px;
  z-index: 1;
}
/* for group listings */
.section-header {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #5c2b87;
  margin-top: 40px;
}
.section-header.faded {
  opacity: 0.6;
}
/* for hide expired */
.toggle-container {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #5c2b87;
}
.toggle-container input {
  margin-right: 8px;
  transform: scale(1.2);
  accent-color: #5c2b87;
}
</style>
