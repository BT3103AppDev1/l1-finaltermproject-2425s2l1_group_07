<template>
    <div class="container">
      <h2>🛠️ Migrate Listings from Realtime DB → Firestore</h2>
      <button @click="migrate">Run Migration</button>
      <p v-if="status">{{ status }}</p>
    </div>
  </template>
  
  <script>
  import { getDatabase, ref as rtdbRef, get as rtdbGet } from "firebase/database";
  import { collection, addDoc } from "firebase/firestore";
  import { database, db } from "@/firebase.js"; // both RTDB + Firestore
  
  export default {
    data() {
      return {
        status: "",
      };
    },
    methods: {
      async migrate() {
        this.status = "⏳ Migrating...";
  
        try {
          const listingsRef = rtdbRef(database, "listings");
          const snapshot = await rtdbGet(listingsRef);
  
          if (!snapshot.exists()) {
            this.status = "❌ No listings found in Realtime DB.";
            return;
          }
  
          const listings = snapshot.val();
          let count = 0;
  
          for (const [key, listing] of Object.entries(listings)) {
            await addDoc(collection(db, "listings"), {
              ...listing,
              migratedFromRealtime: true,
            });
            count++;
          }
  
          this.status = `✅ Migration complete! ${count} listings moved.`;
        } catch (err) {
          console.error("❌ Migration error:", err);
          this.status = "❌ Migration failed. See console.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 40px;
    max-width: 500px;
    margin: auto;
    text-align: center;
  }
  button {
    background: #5c2b87;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    background: #744c97;
  }
  </style>
  