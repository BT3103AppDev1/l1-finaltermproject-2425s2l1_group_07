<template>
    <div>
      <navbar></navbar>
      
  
      <div class="container">
        <h1 class="explore-header">Explore Matches</h1>
        <hr>
        <ul class="sports-list">
          <li v-for="match in matches" :key="match.id" class="sport-card">
            <div class="sport-title">{{ match.title }}</div>
            <div class="sport-details">
              <p><span class="highlight">Location:</span> {{ match.location }}</p>
              <p><span class="highlight">Time:</span> {{ match.time }}</p>
              <p><span class="highlight">Players Needed:</span> {{ match.playersNeeded }}</p>
              <p><span class="highlight">Cost:</span> {{ match.cost }}</p>
              <p><span class="highlight">Experience Level:</span> {{ match.experience }}</p>
              <p><span class="highlight">Equipment:</span> {{ match.equipment }}</p>
              <p><span class="highlight">Description:</span> {{ match.description }}</p>
              <button class="fav-btn" @click="addToFavourites(match)">Add to Favourites</button>
              <button class="chat-btn" @click="joinChat(match)">Join Chat</button>


            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { collection, getDocs, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
  import { db } from "@/firebase.js"; // `db` should be your initialized Firestore
  import { getAuth } from "firebase/auth";
  import Navbar from "@/components/Navbar.vue";
  
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        matches: []
      };
    },
    async created() {
      await this.fetchListings();
    },
    methods: {
      async fetchListings() {
        try {
          const listingsRef = collection(db, "listings");
          const snapshot = await getDocs(listingsRef);
  
          this.matches = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
        } catch (error) {
          console.error("Error fetching listings from Firestore:", error);
        }
      },
  
      async addToFavourites(listing) {
        const userEmail = 'test@email.com'; // Replace with actual auth later
        const userRef = doc(db, 'users', userEmail);
        const userSnap = await getDoc(userRef);
  
        if (!userSnap.exists()) {
          console.error("User not found!");
          return;
        }
  
        let favourites = userSnap.data().favourites || [];
  
        if (favourites.includes(listing.id)) {
          alert("Already in favourites!");
          return;
        }
  
        favourites.push(listing.id);
        await updateDoc(userRef, { favourites });
        alert("Added to favourites!");
      },

      async joinChat(match) {
    const auth = getAuth();
     const user = auth.currentUser;

  if (!user || !user.email) {
    alert("User not authenticated");
    return;
  }

  const userEmail = user.email;
  const userRef = doc(db, 'users', userEmail);
  let userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      joinedChats: [],
      favourites: [],
      name: user.displayName || '',
    });

    userSnap = await getDoc(userRef);
  }

  const userData = userSnap.data();
  let joinedChats = userData?.joinedChats || [];

  if (joinedChats.includes(match.id)) {
    alert("Already joined this chat!");
    return;
  }

  joinedChats.push({
  id: match.id,
  title: match.title,
  time: match.time
});

await setDoc(userRef, { joinedChats }, { merge: true });


  alert(`Joined ${match.title} chat!`);
  this.$router.push('/chats');
}

    }
}
  </script>
  
  
  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #e1dfdfc4;
    margin: 0;
    text-align: left;
}

.container {
    margin: 50px 190px;
}

h1 {
    color: #5c2b87;
    text-align: center;
}

/* General container styling */
.filter-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Dropdown (select) styling */
.filter-container select {
    padding: 5px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #696969;
}

.filter-container select:hover {
    border-color: #3c9c65;
}

/* Button styling */
.filter-container button {
    padding: 7.5px 15px;
    font-size: 16px;
    background-color: #3c9c65;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.filter-container button:hover {
    background-color: rgb(45, 111, 73);
}


.search-container {
    position: relative;
    width: 35vw;
    margin: 20px;
    
}

.search-bar:hover{
    border-color: #3c9c65;
}

.search-bar {
    width: 100%;
    padding: 10px 40px; /* Space for icon */
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
}

.search-icon {
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: gray;
    cursor: pointer;
}



.explore-header {
    align-items: left;
    align-content: left;
    justify-content: left;
    display: flex;
}
.sports-list {
    list-style: none;
    display: flex; /* Enables flexbox */
    flex-wrap: wrap; /* Allows wrapping to the next line */
    justify-content: flex-start; /* Centers the items */
    gap: 55px; /* Adds spacing between items */
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

.fav-btn {
    background-color: #5c2b87;
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

.fav-btn:hover {
    background-color: #744c97;
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

.chat-btn {
    background-color: #5c2b87;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    display: block;
    margin: 10px 0;
    transition: background-color 0.3s;
}

.chat-btn:hover {
    background-color: #744c97;
}

.extra-details {
    display: none; /* Hide details by default */
    margin-top: 5px;
}

.toggle-btn {
    background: none;
    border: none;
    color: #5c2b87;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 5px;
    display: block;
    text-align: left;
}


  </style>
  