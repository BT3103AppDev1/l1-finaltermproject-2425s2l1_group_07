<template>
    <nav class="navbar">
      <!-- Left Side -->
      <div class="logo">MatchUp</div>
  
      <!-- Right Side -->
      <ul class="nav-links">
        <li><router-link to="/favourites"><strong>Favourites</strong></router-link></li>
        <li><router-link to="/chats"><strong>Chats</strong></router-link></li>
        <li><router-link to="/profile"><strong>My Profile</strong></router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style scoped>
  /* Navigation Bar Styles */
  .navbar {
    background-color: #744c97;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    position: fixed; /* Make the navbar fixed at the top */
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* Ensure it appears on top of other content */
  }
  
  .navbar .logo {
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
  }
  
  .navbar .nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
    margin-right: 20px;
  }
  
  .navbar .nav-links li {
    display: inline;
  }
  
  .navbar .nav-links a {
    text-decoration: none;
    color: #ddd;
    font-size: 18px;
    transition: color 0.3s;
  }
  
  .navbar .nav-links a:hover {
    color: #c0bfbf;
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