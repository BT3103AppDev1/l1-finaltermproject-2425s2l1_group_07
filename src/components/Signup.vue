<template>
    <div>

      <div class="signup-container">
        <div class="logo">MatchUp</div>
        <router-link to="/" class="logo">MatchUp</router-link>
        
        <div class="signup-card">
          <h2>Create Your Account</h2>
          <p class="subtitle">Join MatchUp and start playing!</p>
          <form @submit.prevent="signup">
            <div class="input-group">
              <input type="text" v-model="name" placeholder="Full Name" required>
            </div>
            <div class="input-group">
              <input type="email" v-model="email" placeholder="Email" required>
            </div>
            <div class="input-group">
              <input type="password" v-model="password" placeholder="Password" required>
            </div>
            <button type="submit" class="signup-btn">Sign Up</button>
          </form>
          <div class="links">
            <router-link to="/Login">Already have an account? Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      signup() {
        alert(`Signing up with Name: ${this.name}, Email: ${this.email}`);
        // Here you can add signup logic
      }
    }
  };
  </script>
  
  <style scoped>

.logo {
    font-size: 32px;
    font-weight: 700;
    display: flex;
    padding: 20px 5%;
    margin: 0; /* Remove margin to avoid extra space */
    position: fixed; /* Fix logo to the top */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: rgba(72, 27, 112, 0.8);
    box-shadow: 0px 4px 10px rgba(242, 238, 238, 0.3);
    color: white;
    text-decoration: none;
  }

.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure it takes up the full height of the viewport */
  width: 100%; /* Make sure the width is 100% */
  background: url('/signup-bg.jpg') no-repeat center center/cover; /* Background image */
  background: linear-gradient(to right bottom, rgba(72, 27, 112, 0.67), rgba(116, 76, 151, 0.7)); /* Fallback gradient */
  position: absolute; /* Ensure the background covers the entire page */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}


  .signup-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 350px;
    border: 2px solid #744c97;
  }
  h2 {
    color: #5c2b87;
    margin-bottom: 10px;
  }
  .input-group {
    margin-bottom: 15px;
  }
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #744c97;
    border-radius: 6px;
    text-align: center;
  }
  button {
    width: 100%;
    padding: 12px;
    background: #5c2b87;
    border: none;
    color: white;
    cursor: pointer;
  }
  .links {
    margin-top: 15px;
  }
  .links a {
    color: #5c2b87;
    text-decoration: none;
    margin: 0 10px;
  }
  .links a:hover {
    text-decoration: underline;
  }
  </style>
  