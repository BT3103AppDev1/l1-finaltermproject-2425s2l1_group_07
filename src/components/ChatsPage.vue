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
                {{ room.title }} - {{ room.time }}
              </option>
            </select>
          </div>
  
          <div class="current-room-display">
            <h3>
              Current Chat Room:
              <span id="current-room">{{ selectedRoomObj.title }} - {{ selectedRoomObj.time }}</span>
            </h3>
          </div>
  
          <!-- Chat body & input now in its own container -->
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
  import { collection, addDoc, query, where, onSnapshot, doc, getDoc } from 'firebase/firestore';
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
      async loadUserRooms() {
        const userRef = doc(db, 'users', this.currentUser.email);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const joinedChatRefs = userSnap.data().joinedChats || [];
          if (joinedChatRefs[0]?.title) {
            this.joinedRooms = joinedChatRefs;
          } else {
            const roomFetches = joinedChatRefs.map(async (roomId) => {
              const listingRef = doc(db, 'listings', roomId);
              const listingSnap = await getDoc(listingRef);
              if (listingSnap.exists()) {
                return { id: roomId, ...listingSnap.data() };
              }
              return null;
            });
  
            const resolvedRooms = await Promise.all(roomFetches);
            this.joinedRooms = resolvedRooms.filter(room => room !== null);
          }
  
          this.selectedRoom = this.joinedRooms[0]?.id || '';
          this.joinRoom();
        }
      },
      joinRoom() {
        if (!this.selectedRoom) return;
        const q = query(collection(db, 'messages'), where('room', '==', this.selectedRoom));
        onSnapshot(q, (snapshot) => {
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
          createdAt: new Date()
        });
        this.newMessage = '';
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
    margin: 40px auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .chat-main {
    flex: 1;
    display: flex;
    flex-direction: column;
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
    display: flex;
    padding: 12px 24px;
    background: #5c2b87;
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
    font-size: 14px;
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
    font-size: 14px;
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
    font-size: 14px;
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
  