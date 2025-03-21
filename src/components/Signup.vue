<template>
    <navbar></navbar>
    <div>
        <div class="signup-container">
        <div class="logo">MatchUp</div>
        <router-link to="/" class="logo">MatchUp</router-link>
        
        <div class="signup-card">
            <h2>Welcome to MatchUp! 🏆</h2>
            <p class="subtitle">Create your account and start playing!</p>
            <form @submit.prevent="signup">
                <input type="text" v-model="name" placeholder="Full Name" required>
                <input type="email" v-model="email" placeholder="Email" required>
                <input type="password" v-model="password" placeholder="Password" required>
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
    },
    components: {
      Navbar
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
        flex-direction: column;
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: linear-gradient(to right bottom, rgba(72, 27, 112, 0.67), rgba(116, 76, 151, 0.7));
        /*make the bg same as landing page*/
    }

  .signup-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 350px;
    border: 2px solid #744c97;
    justify-content: center;
  }

  h2 {
    color: #5c2b87;
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .subtitle {
    color: #744c97;
    font-size: 16px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin-bottom: 15px;
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
  