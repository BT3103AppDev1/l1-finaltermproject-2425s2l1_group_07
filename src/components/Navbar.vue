<template>
    <!-- Add this in the <head> of your index.html or in the <template> section -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <nav class="navbar">
    <div class="nav-left">
      <div class="logo">MatchUp</div>
      <button class="list-button" @click="goToAddListing">Add new listing +</button>
    </div>
    <ul class="nav-links">
    <li>
        <router-link to="/favourites">
            <i class="fas fa-heart"></i> Favourites
        </router-link>
    </li>
    <li>
        <router-link to="/chats">
            <i class="fas fa-comment-dots"></i> Chats
        </router-link>
    </li>
        <li>
        <router-link to="/profile">
            <i class="fas fa-user"></i> My Profile
        </router-link>
    </li>

    </ul>
  </nav>
  </template>
  
  <script>
  export default {
    methods: {
      goToAddListing() {
        this.$router.push('/add-listing');
      }
    }
  };
  </script>
  
<style scoped>

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
    gap: 35px; /* Spacing between links */
    margin-right: 20px;
}

.navbar .nav-links li {
    display: inline;
}

.navbar .nav-links a {
    text-decoration: none;
    color: white;
    font-size: 17px;
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
  