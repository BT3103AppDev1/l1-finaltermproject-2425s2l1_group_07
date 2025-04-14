<template>
<div>
    <navbar></navbar>

    <div class="main-content">
        <div class="container">
            <div class="check-items">
                <div class="checkmark">✔</div>
                    <h1>Listing Added!</h1>
                    <p>Your listing has been successfully added.</p>
                    <router-link to="/Explore" class="return-btn">Return to Homepage</router-link>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'; // path may vary

export default {
  components: {
    Navbar
  }
};
</script>



<style scoped>

.main-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 60px);
    }

    .container {
      background-color: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      width: 300px;
      text-align: center;
    }

    .checkmark {
      font-size: 100px;
      color: #744c97;
      margin: 10px 0;
    }

    h1 {
      color: #744c97;
      font-size: 36px;
    }

    p {
        margin-bottom: 30px;
    }

    .return-btn {
      width: 100%;
      padding: 10px;
      background: #744c97;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 30px;
      text-decoration: none;
    }

    .return-btn:hover {
      background: #5c2b87;
      text-decoration: none;
    }

    /* Responsive Design for Navbar */
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