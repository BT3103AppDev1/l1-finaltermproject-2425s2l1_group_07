<template>
    <div>
      <div class="login-container">
        <div class="login-card">
          <h2>Welcome to MatchUp! 🏆</h2>
          <p class="subtitle">Find and join sports matches near you.</p>
          <form @submit.prevent="login">
            <div class="input-group">
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="input-group">
              <input
                type="password"
                v-model="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" class="login-btn">Login</button>
          </form>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          <div class="links">
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      login() {
        if (this.email === "user@example.com" && this.password === "password123") {
          alert("Login successful! Redirecting...");
        } else {
          this.errorMessage = "Invalid email or password. Please try again.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Centered Login Box */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    margin-top: 80px;
  }
  
  .login-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 350px;
    border: 2px solid #744c97;
  }
  
  /* Title */
  h2 {
    color: #5c2b87;
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  
  /* Subtitle */
  .subtitle {
    color: #744c97;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  /* Input Fields */
  .input-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #744c97;
    border-radius: 6px;
    font-size: 16px;
    outline: none;
    background: white;
    color: #333;
    text-align: center;
    transition: 0.3s ease;
  }
  
  input::placeholder {
    color: rgba(116, 76, 151, 0.7);
  }
  
  input:focus {
    border-color: #5c2b87;
  }
  
  /* Login Button */
  button {
    width: 100%;
    padding: 12px;
    background: #5c2b87;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s ease;
  }
  
  button:hover {
    background: #744c97;
  }
  
  /* Error Message */
  .error {
    color: red;
    margin-top: 10px;
  }
  
  /* Links */
  .links {
    margin-top: 15px;
  }
  
  .links a {
    color: #5c2b87;
    text-decoration: none;
    margin: 0 10px;
    font-size: 14px;
    transition: 0.3s;
  }
  
  .links a:hover {
    text-decoration: underline;
  }
  </style>
  