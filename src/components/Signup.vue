<template>
    <div>
        <div class="signup-container">
          <router-link to="/" class="logo">MatchUp</router-link>
        <div class="signup-card" ref="cardRef" @click.stop>
            <h2>Welcome to MatchUp! 🏆</h2>
            <p class="subtitle">Create your account and start playing!</p>
            <form @submit.prevent="signup">
              <div class="profile-pic-wrapper" style="margin-bottom: 16px;">
                <label for="profile-picture-upload" style="cursor: pointer;">
                  <img
                    :src="profileImageBase64 || defaultPhoto"
                    alt="Profile Picture"
                    style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 2px solid #744c97;"
                  />
                  </label>
                  <input
                    id="profile-picture-upload"
                    type="file"
                    accept="image/png, image/jpeg"
                    @change="handlePhotoUpload"
                    hidden
                  />

                  <div style="margin-top: 8px; color: #5c2b87; font-weight: bold;">
                    Choose Profile Photo
                  </div>
                </div>
                <input type="text" v-model="name" placeholder="Full Name" required>
                <input type="text" v-model="nickname" placeholder="Display Name" required />
                <input type="email" v-model="email" placeholder="Email" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <button type="submit" class="signup-btn">Sign Up</button>
            </form>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            <div class="links">
              <router-link to="/Login">Already have an account? Login</router-link>
            </div>
        </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword,sendEmailVerification, signOut, updateProfile } from 'firebase/auth';
import Navbar from "@/components/Navbar.vue";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const db = getFirestore(); 

  export default {
    components: {
      Navbar
    },
    setup() {
        const router = useRouter();
        const name = ref("")
        const email = ref("");
        const password = ref("");
        const errorMessage = ref("");
        const cardRef = ref(null);
        const nickname = ref("");
        const defaultPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaOk8qE9ecVIYpm7FH-llQ7EWtS59dttOzza3xloSHG7nTKFW5cWU0KFwvm-1gCgRXKGk&usqp=CAU";
        const profileImageBase64 = ref("");

        const checkPasswordRequirements = (password) => {
          return {
            minLength: password.length >= 10,
            hasUppercase: /[A-Z]/.test(password),
            hasLowercase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[\W_]/.test(password)
          };
        };

        const signup = async () => {
          try {
            errorMessage.value = ""; 

            const checks = checkPasswordRequirements(password.value);
            const unmetCriteria = [];

            if (!checks.minLength) unmetCriteria.push("at least 10 characters");
            if (!checks.hasUppercase) unmetCriteria.push("an uppercase letter");
            if (!checks.hasLowercase) unmetCriteria.push("a lowercase letter");
            if (!checks.hasNumber) unmetCriteria.push("a number");
            if (!checks.hasSpecialChar) unmetCriteria.push("a special character");

            if (unmetCriteria.length > 0) {
              errorMessage.value = `Password must include ${unmetCriteria.join(", ")}.`;
              return;
            }

          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          await sendEmailVerification(user);

          // Save profile data to Firestore
          await setDoc(doc(db, "users", email.value), {
            uid: user.uid,
            name: name.value,
            nickname: nickname.value,
            photoURL: profileImageBase64.value || defaultPhoto,
            email: email.value,
            joinedChats: [],
            firstTime: true
          });

          // Update Firebase Auth profile
          await updateProfile(user, {
            displayName: nickname.value,
            // photoURL: profileImageBase64.value || defaultPhoto
          });

          console.log('User signed up:', user);
          alert(`Signup successful! A verification email has been sent to ${email.value}. Please verify before logging in.`);
          // Log user out immediately to prevent access before verification
          await signOut(auth);
          
          router.push("/Login"); 
          } catch (error) {
            if (!errorMessage.value) {
              errorMessage.value = "Signup failed. Please try again.";
            }
            console.error('Signup error:', error.code, error.message);
          }
        };

        const handlePhotoUpload = (event) => {
          const file = event.target.files[0];
          if (!file) return;

          const validTypes = ["image/jpeg", "image/png"];
          if (!validTypes.includes(file.type)) {
            alert("Please upload a JPG or PNG file.");
            return;
          }

          if (file.size > 500 * 1024) { // 500KB limit
            alert("Please select an image smaller than 500KB");
            return;
          }

          const reader = new FileReader();
          reader.onload = (e) => {
            profileImageBase64.value = e.target.result; // Use the ref directly
          };
          reader.onerror = () => {
            errorMessage.value = "Error reading image file";
          };
          reader.readAsDataURL(file);
        };

        const handleClickOutside = (event) => {
          if (router.currentRoute.value.path === "/SignUp" && cardRef.value && !cardRef.value.contains(event.target)) {
            router.push("/");
          }
        };

        onMounted(() => {
          document.addEventListener('click', handleClickOutside);
        });

        onBeforeUnmount(() => {
          document.removeEventListener('click', handleClickOutside);
        });

      return { name, email, password, errorMessage, cardRef, signup, nickname,
              defaultPhoto, handlePhotoUpload, profileImageBase64 };
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
  