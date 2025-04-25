<template>
  <div>
    <div class="login-container">

      <router-link to="/" class="logo">MatchUp</router-link>
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
        <div class="links">
          <a href="#" @click.prevent="resetPassword">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { db, auth } from '@/firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import Navbar from "@/components/Navbar.vue";
import { getDoc, doc } from 'firebase/firestore';

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
            const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
            const user = userCredential.user;

            // Check if email is verified
            if (!user.emailVerified) {
              await signOut(auth); // Immediately log out unverified users
              errorMessage.value = "Please verify your email before logging in.";
              return;
            }

            const userDoc = await getDoc(doc(db, "users", user.email));
            if (!userDoc.exists() || userDoc.data().firstTime !== false) {
              alert("Login successful! Redirecting...");
              router.push("/onboarding");
            } else {
              alert("Login successful! Redirecting...");
              router.push("/Explore");
            }
          } catch (error) {
            errorMessage.value = "Invalid email or password. Please try again.";
            console.error("Login Error:", error.message);
          }
        };

        const resetPassword = async () => {
          if (!email.value) {
            errorMessage.value = "Please enter your email first.";
            return;
          }
          try {
            await sendPasswordResetEmail(auth, email.value);
            alert(`Password reset email sent to ${email.value}. Check your inbox.`);
          } catch (error) {
            errorMessage.value = "Error sending password reset email. Try again.";
            console.error("Password Reset Error:", error.message);
          }
        };

        const handleClickOutside = (event) => {
          if (router.currentRoute.value.path === "/Login" && cardRef.value && !cardRef.value.contains(event.target)) {
            router.push("/");
          }
        };

        onMounted(() => {
          document.addEventListener('click', handleClickOutside);
        });

        onBeforeUnmount(() => {
          document.removeEventListener('click', handleClickOutside);
        });

    return { email, password, errorMessage, cardRef, login, resetPassword };
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
  