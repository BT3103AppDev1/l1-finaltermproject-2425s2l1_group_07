<template>
  <div>
    <navbar></navbar>
    <div class="login-container">
      <div class="login-card" ref="cardRef" @click.stop>
        <h2>Welcome to MatchUp! 🏆</h2>
        <p class="subtitle">Find and join sports matches near you.</p>
        <form @submit.prevent="login">
          <input type="email" v-model="email" placeholder="Email" required/>
          <input type="password" v-model="password" placeholder="Password" required />
          <button type="submit" class="login-btn">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <div class="links">
          <router-link to="/SignUp">Create an Account</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Navbar from "@/components/Navbar.vue";

  export default {
    components: {
      Navbar
    },
    setup() {
        const router = useRouter();
        const email = ref("");
        const password = ref("");
        const errorMessage = ref("");
        const cardRef = ref(null);

        const login = async () => {
          try {
            await signInWithEmailAndPassword(auth, email.value, password.value);
            alert("Login successful!");
            router.push("/Explore");
          } catch (error) {
            errorMessage.value = "Invalid email or password. Please try again.";
            console.error("Login Error:", error.message);
          }
        };

        const handleClickOutside = (event) => {
          if (cardRef.value && !cardRef.value.contains(event.target)) {
            router.push("/");
          }
        };

        onMounted(() => {
          document.addEventListener('click', handleClickOutside);
        });

        onBeforeUnmount(() => {
          document.removeEventListener('click', handleClickOutside);
        });

    return { email, password, errorMessage, cardRef, login };
    },
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

    /* Centered Login Box */
    .login-container {
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
  