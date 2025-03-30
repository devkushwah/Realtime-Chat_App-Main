# Realtime Chat App

Realtime Chat App is a **full-stack real-time messaging application** built using **MERN (MongoDB, Express.js, React, Node.js) with WebSockets (Socket.IO)**. It allows users to send and receive messages instantly with real-time updates, authentication, and group chat features.

## 🚀 Features
- **User Authentication & Authorization**
  - Signup/Login using **JWT (JSON Web Token)**
  - Secure password hashing with **bcrypt.js**
  - Role-based access for users

- **Real-Time Messaging**
  - Instant one-on-one messaging
  - Group chat functionality
  - Online/offline status indicators
  - Typing indicators
  
- **WebSockets (Socket.IO)**
  - Live message updates without refreshing
  - Real-time notifications for new messages
  
- **Chat Features**
  - Message timestamps & read receipts
  - Emojis & multimedia support (images, GIFs)
  - Delete & edit messages
  
- **API-Driven Architecture**
  - Built with **RESTful APIs** for user & chat management
  - Secure authentication middleware

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Redux, Socket.IO Client
- **Backend:** Node.js, Express.js, Socket.IO
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT, bcrypt.js
- **Real-Time Communication:** Socket.IO
- **Styling:** Tailwind CSS / Material-UI

---

## 📂 Folder Structure
```
📦 Realtime-Chat-App
├── 📂 client (Frontend - React.js)
│   ├── components/ (UI Components)
│   ├── pages/ (React Pages)
│   ├── context/ (Global State Management)
│   ├── public/ (Static assets)
│
├── 📂 server (Backend - Express.js)
│   ├── models/ (Mongoose Schemas)
│   ├── routes/ (API Routes)
│   ├── controllers/ (Business Logic)
│   ├── middleware/ (Auth Middleware)
│   ├── sockets/ (Socket.IO Events)
│   ├── index.js (Main App Entry Point)
│
├── .env (Environment Variables)
├── .gitignore (Ignored files)
├── package.json (Project Dependencies)
├── README.md (Project Documentation)
```

---

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/devkushwah22/Realtime-Chat-App.git
cd Realtime-Chat-App
```

### 2️⃣ Install Dependencies
```sh
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the `server/` directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
SOCKET_PORT=your_socket_port
```

### 4️⃣ Run the Project
```sh
# Start Backend Server
cd server
npm run dev

# Start Frontend
cd client
npm run dev
```
Then, open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 API Endpoints
| Method | Endpoint | Description |
|--------|----------|------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user with JWT |
| GET | `/api/users` | Fetch all users |
| GET | `/api/chats` | Fetch all chats |
| POST | `/api/chats` | Create a new chat |
| POST | `/api/messages` | Send a new message |
| GET | `/api/messages/:chatId` | Fetch chat messages |

---

## ✨ Future Enhancements
- **Voice & Video Calling** (WebRTC integration)
- **Message Reactions & Replies**
- **Push Notifications**
- **Dark Mode UI Theme**

---

## 🏆 Contributing
Contributions are welcome! Feel free to fork the repository, submit a pull request, or open an issue.

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

