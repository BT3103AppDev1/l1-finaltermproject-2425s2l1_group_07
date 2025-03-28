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
      <div class="filter-container">
        <select v-model="selectedSport" class="filter-dropdown">
          <option value="">All Sports</option>
          <option v-for="sport in sportsTypes" :key="sport" :value="sport">
            {{ sport }}
          </option>
        </select>

        <select v-model="selectedLocation" class="filter-dropdown">
          <option value="">All Locations</option>
          <option v-for="location in locations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>

        <select v-model="selectedExperience" class="filter-dropdown">
          <option value="">All Experience Levels</option>
          <option value="⭐"> ⭐ </option>
          <option value="⭐⭐"> ⭐⭐ </option>
          <option value="⭐⭐⭐"> ⭐⭐⭐ </option>
          <option value="⭐⭐⭐⭐"> ⭐⭐⭐⭐ </option>
          <option value="⭐⭐⭐⭐⭐"> ⭐⭐⭐⭐⭐ </option>
        </select>
      </div>

      <!-- Listings -->
      <ul class="sports-list">
        <li v-for="match in filteredMatches" :key="match.id" class="sport-card">
          <div class="sport-title">{{ match.title }}</div>
          <div class="sport-details">
            <p><span class="highlight">Sport Type:</span> {{ match.sportType }}</p>
            <p><span class="highlight">Location:</span> {{ match.location }}</p>
            <p><span class="highlight">Time:</span> {{ match.time }}</p>
            <p><span class="highlight">Players Needed:</span> {{ match.playersNeeded }}</p>
            <p><span class="highlight">Cost:</span> {{ match.cost }}</p>
            <p><span class="highlight">Experience Level:</span> {{ match.experience }}</p>
            <p><span class="highlight">Description:</span> {{ match.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.js";
import Navbar from "@/components/Navbar.vue";

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
    };
  },
  created() {
    this.fetchListings();
  },
  computed: {
    filteredMatches() {
      return this.matches.filter((match) => {
        const matchesSearch =
          match.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          match.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          match.description.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesSport = this.selectedSport ? match.sportType === this.selectedSport : true;
        const matchesLocation = this.selectedLocation ? match.location === this.selectedLocation : true;
        const matchesExperience = this.selectedExperience ? match.experience == this.selectedExperience : true;

        return matchesSearch && matchesSport && matchesLocation && matchesExperience;
      });
    },
  },
  methods: {
    async fetchListings() {
      try {
        const listingsRef = collection(db, "listings");
        const snapshot = await getDocs(listingsRef);

        this.matches = snapshot.docs.map((doc) => {
          let data = doc.data();

          if (!data.sportType) {
            data.sportType = data.title
          }

          return {
            id: doc.id,
            ...data,
          };
        });

        // Extract sports types and locations
        this.sportsTypes = [...new Set(this.matches.map((match) => match.sportType))];
        this.locations = [...new Set(this.matches.map((match) => match.location))];
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  background-color: #e1dfdfc4;
  margin: 0;
  text-align: left;
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
  display: flex; /* Enables flexbox */
  flex-wrap: wrap; /* Allows wrapping to the next line */
  justify-content: center; /* Centers the items */
  gap: 55px; /* Adds spacing between items */
  padding: 0; /* Removes default padding */
}

.sport-card {
  background-color: white;
  border-left: 5px solid #744c97;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: calc(
    50% - 20px
  ); /* Makes each card take 50% of the container width minus gap */
  max-width: 500px; /* Prevents it from becoming too wide */
  box-sizing: border-box; /* Ensures padding doesn’t add extra width */
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
</style>
