<template>
    <div class="page-wrapper">
      <navbar />
  
      <div class="chat-container">
        <div v-if="joinedRooms.length === 0" class="empty-chat-message">
          <h2>No chats joined yet! 🥲</h2>
          <p>Start the fun by <router-link to="/explore">joining a listing</router-link>!</p>
        </div>
  
        <div v-else>
          <header>
            <h1>Chat Rooms</h1>
            <div class="online-users">
              <span>Online Users:</span>
              <span class="user-count">{{ onlineUsers.length }}</span>
            </div>
          </header>
  
          <div class="discussion-bar">
            <h2>Joined Groups</h2>
            <select v-model="selectedRoom" class="dropdown" @change="joinRoom">
              <option v-for="room in joinedRooms" :key="room.id" :value="room.id">
                {{ room.title }} - {{ formatTime(room.time) }}
              </option>
            </select>
          </div>
  
          <div class="current-room-display">
            <h3>
              Current Chat Room:
              <span id="current-room">{{ selectedRoomObj.title }} - {{ formatTime(selectedRoomObj.time) }}</span>
            </h3>
            <button class="leave-chat-btn" @click="leaveChat">Leave Chat</button>
          </div>
  
          <div class="chat-main">
            <div class="chat-box">
              <div
                v-for="(msg, index) in messages[selectedRoom]"
                :key="index"
                :class="['message', msg.userId === currentUser.uid ? 'my-msg' : 'user-msg']"
              >
                <div class="username">{{ msg.username }}</div>
                <div class="message-content">{{ msg.text }}</div>
              </div>
            </div>
  
            <div class="chat-input">
              <input
                type="text"
                v-model="newMessage"
                placeholder="Type a message..."
                @keyup.enter="sendMessage"
              />
              <button @click="sendMessage">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from '@/firebase';
  import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
    doc,
    getDoc,
    updateDoc,
    orderBy,
    serverTimestamp
  } from 'firebase/firestore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import Navbar from '@/components/Navbar.vue';
  
  export default {
    components: { Navbar },
    data() {
      return {
        selectedRoom: '',
        joinedRooms: [],
        messages: {},
        newMessage: '',
        onlineUsers: [],
        currentUser: {},
      };
    },
    async created() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.currentUser = user;
          await this.loadUserRooms();
        } else {
          console.warn("No user is signed in.");
        }
      });
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

      async loadUserRooms() {
        const userRef = doc(db, 'users', this.currentUser.email);
        const userSnap = await getDoc(userRef);
  
        if (!userSnap.exists()) {
          console.warn("User document not found.");
          return;
        }
  
        const joinedChatRefs = userSnap.data().joinedChats || [];
  
        // Case 1: Full room data present
        if (joinedChatRefs.length > 0 && joinedChatRefs[0]?.title) {
          this.joinedRooms = joinedChatRefs;
        } else {
          // Case 2: Just a list of IDs
          const roomFetches = joinedChatRefs.map(async (roomIdOrObj) => {
            const roomId = roomIdOrObj.id || roomIdOrObj;
            const listingRef = doc(db, 'listings', roomId);
            const listingSnap = await getDoc(listingRef);
  
            if (listingSnap.exists()) {
              return {
                id: listingSnap.id,
                ...listingSnap.data()
              };
            }
            return null;
          });
  
          const resolvedRooms = await Promise.all(roomFetches);
          this.joinedRooms = resolvedRooms.filter(room => room !== null);
        }
  
        this.selectedRoom = this.joinedRooms[0]?.id || '';
        this.joinRoom();
      },
  
      joinRoom() {
        if (!this.selectedRoom) return;
        const q = query(collection(db, 'messages'), where('room', '==', this.selectedRoom));
        const sortedQuery = query(
          q,  // Use the previously defined query (base query with 'where')
          orderBy('createdAt', 'asc')  // Sort by createdAt in ascending order
        );
        onSnapshot(sortedQuery, (snapshot) => {
          this.messages[this.selectedRoom] = snapshot.docs.map(doc => doc.data());
        });
      },
  
      async sendMessage() {
        if (!this.newMessage.trim()) return;
        await addDoc(collection(db, 'messages'), {
          room: this.selectedRoom,
          text: this.newMessage,
          userId: this.currentUser.uid,
          username: this.currentUser.displayName || 'You',
          createdAt: serverTimestamp()
        });
        this.newMessage = '';
      },
  
      async leaveChat() {
        if (!this.selectedRoom) return;
  
        alert("Leaving chat...");
  
        const userRef = doc(db, 'users', this.currentUser.email);
        const userSnap = await getDoc(userRef);
  
        if (!userSnap.exists()) {
          console.warn("User document not found.");
          return;
        }
  
        let updatedChats = userSnap.data().joinedChats || [];
  
        updatedChats = updatedChats.filter(room => {
          if (typeof room === 'string') {
            return room !== this.selectedRoom;
          } else {
            return room.id !== this.selectedRoom;
          }
        });
  
        await updateDoc(userRef, {
          joinedChats: updatedChats
        });
  
        this.joinedRooms = this.joinedRooms.filter(room => room.id !== this.selectedRoom);
        this.selectedRoom = this.joinedRooms[0]?.id || '';
        if (this.selectedRoom) {
          this.joinRoom();
        }
      }
    },
    computed: {
      selectedRoomObj() {
        return this.joinedRooms.find(room => room.id === this.selectedRoom) || {};
      }
    }
  };
  </script>
  
  <style scoped>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: url('landing%20bgnd.jpg') no-repeat center center fixed;
    background-size: cover;
  }
  
  .chat-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
    /*height: calc(100vh - 0px);*/
    padding-bottom: 10px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .chat-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height : 70%;
    padding-bottom: 20px;
  }
  
  .chat-box {
    flex: 1;
    overflow-y: auto;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .chat-input {
    background: #5c2b87;
    display: flex;
    padding: 12px 24px;
    gap: 8px;
    align-items: center;
    border-top: 2px solid #744c97;
  }
  
  .chat-input input {
    flex-grow: 1;
    border: none;
    padding: 8px;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
  }
  
  .chat-input button {
    background: #744c97;
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  }
  
  .chat-input button:hover {
    background: #5c2b87;
  }
  
  .leave-chat-btn {
    margin-top: 8px;
    background: #e74c3c;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
  }
  
  .leave-chat-btn:hover {
    background: #c0392b;
  }
  
  header {
    background-color: #5c2b87;
    color: white;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .online-users {
    display: flex;
    align-items: center;
  }
  
  .user-count {
    font-weight: bold;
    margin-left: 6px;
  }
  
  .discussion-bar {
    background: #744c97;
    padding: 6px;
    font-size: 14px;
    text-align: center;
    color: white;
  }
  
  .dropdown {
    width: 100%;
    padding: 6px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    background: white;
    color: #5c2b87;
    font-weight: bold;
  }
  
  .current-room-display {
    text-align: center;
    padding: 6px;
    background: #e1dfdfc4;
    font-size: 14px;
    font-weight: bold;
    color: #5c2b87;
    border-bottom: 2px solid #5c2b87;
  }
  
  .message {
    max-width: 90%;
    padding: 8px;
    border-radius: 8px;
    font-size: 18px;
  }
  
  .user-msg {
    background: #744c97;
    color: white;
    align-self: flex-start;
  }
  
  .my-msg {
    background: #5c2b87;
    color: white;
    align-self: flex-end;
  }
  
  .empty-chat-message {
    text-align: center;
    margin-top: 80px;
    font-size: 18px;
    color: #5c2b87;
  }
  
  .empty-chat-message p {
    margin-top: 10px;
    font-size: 16px;
  }
  
  .empty-chat-message a {
    color: #744c97;
    font-weight: bold;
    text-decoration: none;
  }
  
  .empty-chat-message a:hover {
    text-decoration: underline;
  }
  </style>
  