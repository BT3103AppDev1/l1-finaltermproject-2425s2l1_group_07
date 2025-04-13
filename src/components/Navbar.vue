<template>
    <!-- Add this in the <head> of your index.html or in the <template> section -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <nav class="navbar">
    <div class="nav-left">
      <router-link to="/Explore"> 
        <div class="logo">MatchUp</div>
      </router-link>
      
      <button class="list-button" @click="goToAddListing"><span>Add new listing</span> +</button>
    </div>
    <div class="nav-right">
    <ul class="nav-links">
    <li>
        <router-link to="/favourites">
            <i class="fas fa-heart"></i> <span>Favourites</span>
        </router-link>
    </li>
    <li>
        <router-link to="/chats">
            <i class="fas fa-comment-dots"></i> <span>Chats</span>
        </router-link>
    </li>
        <li>
        <router-link to="/profile">
            <i class="fas fa-user"></i> <span>My Profile</span>
        </router-link>
    </li>
    <button class="logout-btn" @click="signOut">Log Out</button>

    </ul>
    </div>
  </nav>
  </template>
  
  <script>
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
  export default {
    data() {
      return {
        user: false,
      }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
          }
        });
    },
    methods: {
      goToAddListing() {
        this.$router.push('/add-listing');
      },
      signOut() {
        const auth = getAuth();
        const user = auth.currentUser;
        signOut(auth, user);
        this.$router.push("/");
     }
    }
  };
  </script>
  
<style scoped>

/* nav bar styles */
.logo {

    text-decoration: double;
    color: white;
}

.navbar a {
    text-decoration: none;
}


.navbar {
    background-color: #744c97; 
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-family:'Roboto', sans-serif;
    text-decoration: none;
}

/* Left Side (Company Name) */
.navbar .logo {
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
    text-decoration: none;
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

.nav-right {
  display: flex;
  align-items: center;
  gap: 30px; /* space between nav-links and logout button */
  margin-top: 15px;
}

.logout-btn {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.logout-btn:hover {
    background-color: white;
    color: #744c97;
}

@media (max-width: 830px) {
  .nav-links li a span{
    display: none !important;
  }

  .nav-links {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    width: 100%;
    padding: 0;
  }

  .list-button {
    padding: 8px 12px;
    font-size: 20px;
  }

  .nav-left {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .navbar {
    flex-wrap: wrap;
    justify-content: center;
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

  .logout-btn {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

.logout-btn:hover {
    background-color: white;
    color: #744c97;
  }
}
  

</style>
  