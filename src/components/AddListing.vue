<template>
    <div class="container">
        <button class="cancel-button" @click="goBack">
            <img src="@/assets/close.png" alt="Close" />
        </button>

        <h2 class="heading">Add Your Listing</h2>
        <hr>
        <form @submit.prevent="addListing">
            <label for="sport">Sports Name</label>
            <input v-model="newListing.title" type="text" id="sport" placeholder="e.g Tennis, Golf" required>

            <label for="players">Total no. of players needed</label>
            <input v-model="newListing.playersNeeded" type="number" id="players" min="1" placeholder="e.g 2" required>

            <label for="location">Location</label>
            <input v-model="newListing.location" type="text" id="location" placeholder="e.g Orchard mrt" required>

            <label for="time">Time</label>
            <input v-model="newListing.time" type="datetime-local" id="time" required>

            <label for="cost">Cost (SGD)</label>
            <input v-model="newListing.cost" type="number" id="cost" min="0" placeholder="Cost per pax (if applicable, else 0)" required>

            <label>Experience Level</label>
            <div class="stars">
                <input type="radio" v-model="newListing.experience" id="star5" value="5"><label for="star5">★</label>
                <input type="radio" v-model="newListing.experience" id="star4" value="4"><label for="star4">★</label>
                <input type="radio" v-model="newListing.experience" id="star3" value="3"><label for="star3">★</label>
                <input type="radio" v-model="newListing.experience" id="star2" value="2"><label for="star2">★</label>
                <input type="radio" v-model="newListing.experience" id="star1" value="1"><label for="star1">★</label>
            </div>

            <label>Equipment (e.g racket, ball)</label>
            <select v-model="newListing.equipment">
                <option value="">-- Select --</option>
                <option value="provided">Provided</option>
                <option value="bring your own">Bring your own</option>
            </select>

            <label for="description">Description / Additional Remarks</label>
            <textarea v-model="newListing.description" id="description" rows="4" placeholder="e.g Equipment to bring: Racket"></textarea>

            <button type="submit" class="submit-btn">Find Player(s)</button>
       
          
        </form>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase.js";
import { getAuth } from "firebase/auth";

export default {
    setup() {
        const router = useRouter();
        return { router };
    },
    data() {
        return {
            newListing: {
                title: "",
                playersNeeded: "",
                location: "",
                time: "",
                cost: "",
                experience: "",
                equipment: "",
                description: ""
            }
        };
    },
    methods: {
        goBack() {
            this.router.push('/Explore');
        },
        async addListing() {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                alert("You must be logged in to create a listing.");
                return;
            }

            const listingData = {
                ...this.newListing,
                ownerId: user.email,
            };
            try {
                await addDoc(collection(db, "listings"), listingData);
                this.router.push('/Added');
            } catch (error) {
                console.error("Error adding listing: ", error);
                alert("Failed to add listing. Please try again.");
            }
        }
    }
};
</script>

<style scoped>
/* Ensure full screen and center content */
template {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    height: 100vh;
    width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Main container */
.container {
    background: white;
    width: 50%; /* Fixed width for a smaller container */
    height: auto;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative; /* Ensures positioning for close button */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;  /* Centers the container horizontally */
    margin-right: auto; /* Centers the container horizontally */
}

/* Close button */
.cancel-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background: none;
    border: none;
    cursor: pointer;
}

.cancel-button img {
    width: 20px;
    height: 20px;
}

/* Heading styling */
.heading {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
    display: flex;
    justify-content: left;
    align-items: left;
}

/* Horizontal line styling */
hr {
    width: 100%;
    border: 0.5px solid #ccc; /* Light grey line */
    margin: 10px 0;
}

/* Form layout */
form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

/* Inputs, dropdowns, textareas */
input, select, textarea {
    width: 100%;
    padding: 12px;
    margin-top: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
}

textarea {
    resize: vertical;
}

/* Labels */
label {
    font-weight: bold;
    margin-top: 15px;
    color: #333;
}

/* Experience stars */
.stars {
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    gap: 5px;
}

.stars input {
    display: none;
}

.stars label {
    font-size: 22px;
    color: gray;
    cursor: pointer;
}

/* Highlight selected stars */
input[type="radio"]:checked ~ label {
    color: gold;
}

/* Submit button */
.submit-btn {
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    background: #744c97;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
}

.submit-btn:hover {
    background: #5c2b87;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
    .container {
        width: 80%;
    }
}

@media screen and (max-width: 500px) {
    .container {
        width: 90%;
    }
}
</style>

