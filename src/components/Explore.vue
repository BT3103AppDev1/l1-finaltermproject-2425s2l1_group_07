<template>
    <div>
      <nav class="navbar">
        <div class="nav-left">
          <div class="logo">MatchUp</div>
          <button class="list-button" @click="goToAddListing">Add new listing</button>
        </div>
        <ul class="nav-links">
          <li><a href="#">Favourites</a></li>
          <li><a href="#">Chats</a></li>
          <li><a href="#">My Profile</a></li>
        </ul>
      </nav>
  
      <div class="container">
        <h1 class="explore-header">Explore Matches</h1>
        <hr>
        <ul class="sports-list">
          <li v-for="match in matches" :key="match.id" class="sport-card">
            <div class="sport-title">{{ match.title }}</div>
            <div class="sport-details">
              <p><span class="highlight">Location:</span> {{ match.location }}</p>
              <p><span class="highlight">Time:</span> {{ match.time }}</p>
              <p><span class="highlight">Players Needed:</span> {{ match.playersNeeded }}</p>
              <p><span class="highlight">Cost:</span> {{ match.cost }}</p>
              <p><span class="highlight">Experience Level:</span> {{ '⭐'.repeat(match.experience) }}</p>
              <p><span class="highlight">Equipment:</span> {{ match.equipment }}</p>
              <p><span class="highlight">Description:</span> {{ match.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, onValue } from "firebase/database";
  
  const firebaseConfig = {
    apiKey: "AIzaSyD43V2HIX_PDP5P6fxktVPXjhh1Lv994LU",
    authDomain: "bt3103-matchup.firebaseapp.com",
    databaseURL: "https://bt3103-matchup-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bt3103-matchup",
    storageBucket: "bt3103-matchup.appspot.com",
    messagingSenderId: "132707622798",
    appId: "1:132707622798:web:b30dcd6dd26c639400cedf",
    measurementId: "G-EY15PSDKMD"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  export default {
    data() {
      return {
        matches: []
      };
    },
    created() {
      this.fetchListings();
    },
    methods: {
      goToAddListing() {
        this.$router.push('/add-listing'); // ✅ Correct way to navigate
      },
      fetchListings() {
        const listingsRef = ref(database, "listings");
        onValue(listingsRef, (snapshot) => {
          this.matches = [];
          snapshot.forEach((childSnapshot) => {
            this.matches.push({ id: childSnapshot.key, ...childSnapshot.val() });
          });
        });
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
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

/* Button styling */
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

.search-bar:hover{
    border-color: #3c9c65;
}

.search-bar {
    width: 100%;
    padding: 10px 40px; /* Space for icon */
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
    width: calc(50% - 20px); /* Makes each card take 50% of the container width minus gap */
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


/* nav bar styles */
.navbar {
    background-color: #744c97; 
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-family:'Roboto', sans-serif;
}

/* Left Side (Company Name) */
.navbar .logo {
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
}

.nav-left {
    display: flex;
    align-items: center;
    gap: 25px; /* Space between logo & button */
}

.list-button {
    background-color: #3c9c65; /* Green button */
    color: white; /* White text */
    font-size: 16px;
    font-weight: bold;
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Hover effect */
.list-button:hover {
    background-color: #2f7f50;
    transform: scale(1.05); /* Slight pop effect */
}

/* Click effect */
.list-button:active {
    transform: scale(0.95);
}


/* Right Side (Navigation Links) */
.navbar .nav-links {
    list-style: none;
    display: flex;
    gap: 30px; /* Spacing between links */
    margin-right: 20px;
}

.navbar .nav-links li {
    display: inline;
}

.navbar .nav-links a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: color 0.3s;
}

.navbar .nav-links a:hover {
    color: #ddd; /* Lighter color on hover */
}

/* Responsive Design */
@media (max-width: 600px) {
    .navbar {
        flex-direction: column;
        text-align: center;
    }
    
    .navbar .nav-links {
        margin-top: 10px;
        flex-direction: column;
        gap: 10px;
    }
}
  
  </style>
  