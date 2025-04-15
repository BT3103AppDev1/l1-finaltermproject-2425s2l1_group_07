<template>
  <div class="container">
    <h1>Favourited Listings</h1>
    <hr>
    <ul class="sports-list">
      <li v-for="listing in listings" :key="listing.id" class="sport-card">
        <button class="unfavourite-btn" @click="unfavourite(listing.id)">Remove Favourites</button>
        <div class="sport-title">{{ listing.title }}</div>
        <div class="sport-details">
          <p><span class="highlight">Location:</span> {{ listing.location }}</p>
          <p><span class="highlight">Time:</span> {{ formatTime(listing.time) }}</p>
          <button class="toggle-btn" @click="toggleDetails($event)">More ⬇️</button>
          <div class="hidden-details">
            <p><span class="highlight">Players Needed:</span> {{ listing.playersNeeded }}</p>
            <p><span class="highlight">Cost:</span> {{ listing.cost }}</p>
            <p><span class="highlight">Experience Level:</span> <span class="stars">{{ listing.experience }}</span></p>
            <p><span class="highlight">Description / Additional Remarks:</span> {{ listing.description }}</p>
          </div>
          <button class="chat-btn" @click="joinChat(listing.sport)">
            Join Chat <span class="chat-icon">➡️</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { db, getDoc, doc, updateDoc } from '../firebase.js';
import { auth } from '@/firebase';

export default {
  name: 'Favourites',

  data() {
      return {
          listings: []
      };
  },

  async created() {
      await this.fetchListings();
  },

  methods: {
    formatTime(isoString) {
      const date = new Date(isoString);
    
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${day}/${month}/${year} ${hours}:${minutes}`;
    },
    
      async getCurrentUserEmail() {
          const user = auth.currentUser;
          if (user) {
              return user.email; 
          } else {
              throw new Error("No user is currently logged in.");
          }

          // return 'test@email.com'; // test functionality
      },

      async fetchListings() {
          const userEmail = await this.getCurrentUserEmail();
          const userDocRef = doc(db, 'users', userEmail);
          const userDocSnap = await getDoc(userDocRef);

          if (!userDocSnap.exists()) {
              console.error("User document not found.");
              return;
          }

          const favouriteListingIds = userDocSnap.data().favourites;
          if (!favouriteListingIds || favouriteListingIds.length === 0) {
              console.log("No favourite listings found for this user.");
              this.listings = []; 
              return;
          }

          const listingsPromises = favouriteListingIds.map(async (listingId) => {
              const listingDocRef = doc(db, 'listings', listingId);
              const listingDocSnap = await getDoc(listingDocRef);

              if (listingDocSnap.exists()) {
                  return { id: listingDocSnap.id, ...listingDocSnap.data() };
              } else {
                  console.warn(`Listing with ID ${listingId} not found.`);
                  return null;
              }
          });

          const listings = await Promise.all(listingsPromises);
          this.listings = listings.filter(listing => listing !== null); 
      },

      async unfavourite(id) {
          const userEmail = await this.getCurrentUserEmail();
          const userDocRef = doc(db, 'users', userEmail);
          const userDocSnap = await getDoc(userDocRef);

          if (!userDocSnap.exists()) {
              console.error("User document not found.");
              return;
          }

          const updatedFavourites = userDocSnap.data().favourites.filter(favId => favId !== id);
          await updateDoc(userDocRef, {
              favourites: updatedFavourites
          });

          this.listings = this.listings.filter(listing => listing.id !== id);
      },

      joinChat(sportName) {
          alert(`Joining chat for ${sportName}!`);
      },

      toggleDetails(event) {
          const button = event.target;
          const details = button.parentElement.querySelector('.hidden-details');
          
          if (details.style.display === "none" || details.style.display === "") {
              details.style.display = "block";
              button.style.display = "none";

              const lessBtn = document.createElement("button");
              lessBtn.classList.add("toggle-btn");
              lessBtn.innerHTML = "Less ⬆️";
              lessBtn.onclick = function() {
                  details.style.display = "none";
                  lessBtn.remove();
                  button.style.display = "flex";
              };
              details.appendChild(lessBtn);
          }
      }
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #e1dfdfc4;
  margin: 0;
}

.container {
    margin: 50px 150px;
}

h1 {
    text-align: center;
    color: #5c2b87;
}
.sports-list {
    list-style: none;
    display: flex; /* Enables flexbox */
    flex-wrap: wrap; /* Allows wrapping to the next line */
    justify-content: flex-start; /* Centers the items */
    gap: 50px; /* Adds spacing between items */
    padding: 0; /* Removes default padding */
}

.sport-card {
    background-color: white;
    border-left: 5px solid #744c97;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    width: calc(50% - 20px); /* Makes each card take 50% of the container width minus gap */
    max-width: 500px; /* Prevents it from becoming too wide */
    box-sizing: border-box; /* Ensures padding doesn’t add extra width */
}


.sport-title {
    font-size: 20px;
    font-weight: bold;
    color: #5c2b87;
}

.sport-details {
    font-size: 14px;
    color: #333;
    margin-top: 5px;
}

.highlight {
    color: #744c97;
    font-weight: bold;
}

.stars {
    color: #f4c430;
    font-size: 16px;
}

.unfavourite-btn {
    background-color: #744c97;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    position: absolute;
    top: 10px;
    right: 10px;
    transition: background-color 0.3s;
}

.unfavourite-btn:hover {
    background-color: #5c2b87;
}

.chat-btn {
    background-color: #5c2b87;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    transition: background-color 0.3s;
    justify-content: center;
}

.chat-btn:hover {
    background-color: #744c97;
}

.chat-icon {
    font-weight: bold;
    font-size: 16px;
}

.toggle-btn {
    background: none;
    border: none;
    color: #5c2b87;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.hidden-details {
    display: none;
    margin-top: 5px;
}
</style>