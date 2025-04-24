<template>
    <div class="onboarding-container">
        <div class="logo">MatchUp</div>
  
      <div class="onboarding-card">
        <h2>Welcome to MatchUp! 🏐</h2>
        <p class="subtitle">Tell us a bit about yourself so we can match you better.</p>
  
        <form @submit.prevent="submitOnboarding">
          <!-- About Me -->
          <textarea
            v-model="aboutMe"
            placeholder="Write something about yourself..."
            rows="4"
            required
          ></textarea>
  
          <!-- Sports List -->
            <label class="sports-label">What sports do you play?</label>
            <input
            v-model="sportsInput"
            placeholder="e.g. Football, Basketball, Badminton"
            required
            />
  
          <button type="submit" class="submit-btn">Continue</button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { doc, setDoc } from "firebase/firestore";
  import { db, auth } from "@/firebase";
  
  export default {
    setup() {
      const router = useRouter();
      const aboutMe = ref("");
      const errorMessage = ref("");
      const sportsInput = ref("");
  
      const submitOnboarding = async () => {
        try {
          const user = auth.currentUser;
          if (!user) {
            errorMessage.value = "User not logged in.";
            return;
          }
  
          const sportsArray = sportsInput.value
            .split(",")
            .map(s => s.trim())
            .filter(s => s !== "");

            const userRef = doc(db, "users", user.email);

            await setDoc(userRef, {
                about: aboutMe.value,
                sports: sportsArray,
                firstTime: false,
            }, { merge: true });
  
            alert("Onboarding successful! Redirecting...");
            router.push("/Explore");
        } catch (error) {
          console.error("Onboarding Error:", error);
          errorMessage.value = "Something went wrong. Please try again.";
        }
      };
  
      return {
        aboutMe,
        sportsInput,
        errorMessage,
        submitOnboarding,
      };
    },
  };
  </script>
  
  <style scoped>
  .logo {
    font-size: 32px;
    font-weight: 700;
    display: flex;
    padding: 20px 5%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: rgba(72, 27, 112, 0.8);
    box-shadow: 0px 4px 10px rgba(242, 238, 238, 0.3);
    color: white;
    text-decoration: none;
  }
  
  .onboarding-container {
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
  }
  
  .onboarding-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 400px;
    border: 2px solid #744c97;
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
  
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #744c97;
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 20px;
    resize: none;
    box-sizing: border-box;
  }
  
  .sports-label {
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
    color: #5c2b87;
  }
  
  .sports-options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: start;
    margin-bottom: 20px;
  }
  
  .sport-checkbox {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #333;
  }
  
  .submit-btn {
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
    box-sizing: border-box;
  }
  
  .submit-btn:hover {
    background: #744c97;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #744c97;
    border-radius: 6px;
    font-size: 16px;
    margin-bottom: 20px;
    box-sizing: border-box;
   }
</style>
  