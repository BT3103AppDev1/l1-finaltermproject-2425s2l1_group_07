<template>
    <div class="container">
      <h1 class="favourites-heading">Favourited Listings</h1>
      <hr class="favourites-hr">
      <ul class="sports-list">
        <li v-for="listing in listings" :key="listing.id" class="sport-card">
          <button class="unfavourite-btn" @click="unfavourite(listing.id)">Remove Favourites</button>
          <div class="sport-title">{{ listing.sport }}</div>
          <div class="sport-details">
            <p><span class="highlight">Location:</span> {{ listing.location }}</p>
            <p><span class="highlight">Time:</span> {{ listing.time }}</p>
            <button class="more-btn" @click="toggleDetails($event)">More ⬇️</button>
            <div class="hidden-details">
              <p><span class="highlight">Players Needed:</span> {{ listing.playersNeeded }}</p>
              <p><span class="highlight">Cost:</span> {{ listing.cost }}</p>
              <p><span class="highlight">Experience Level:</span> <span class="stars">{{ listing.experienceLevel }}</span></p>
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
        async getCurrentUserEmail() {
            // const user = auth.currentUser;
            // if (user) {
            //     return user.email; 
            // } else {
            //     throw new Error("No user is currently logged in.");
            // }

            return 'test@email.com' // test functionality
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
            }
        },
        async unfavourite(id) {
            const userEmail = await this.getCurrentUserEmail();
            const userDocRef = doc(db, 'users', userEmail);
            const userDocSnap = await getDoc(userDocRef);

            if (!userDocSnap.exists()) {
                console.error("User document not found.");
                return;
            }

            const updatedFavourites = userDocSnap.data().favourites.filter(id => id !== listingId);
            await updateDoc(userDocRef, {
                favourites: updatedFavourites
            });

            this.listings = this.listings.filter(listing => listing.id !== listingId);
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
            lessBtn.classList.add("more-btn");
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
</script>
  
<style scoped>
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #e1dfdfc4;
    margin: 0;
    padding: 20px;
  }
  
  .container {
    width: 500px;
    margin-top: 100px; 
  }

  .favourites-heading {
    text-align: center; 
    margin: 0; 
    padding: 0;
    color: #5c2b87;
    font-size: 28px;
    font-weight: bold; 
    width: 100%;
  }

  .favourites-hr {
    width: 100%;
    margin-bottom: 20px; 
  }

  .sports-list {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  .sport-card {
    background-color: white;
    border-left: 5px solid #744c97;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    word-wrap: break-word;
  }

  .sport-title {
    font-size: 22px;
    font-weight: bold;
    color: #5c2b87;
    margin-bottom: 10px;
  }

  .sport-details {
    font-size: 16px;
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
    padding: 10px 15px;
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

  .more-btn {
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
    margin-top: 15px;
  }
</style>