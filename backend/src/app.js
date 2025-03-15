import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";  // ✅ Import CORS middleware
import dotenv from "dotenv"; // ✅ Load environment variables
import { initializeSocketIO } from "./socket/index.js";
import chatRouter from "./routes/chat.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";

dotenv.config(); // ✅ Load `.env` variables

const app = express();
const httpServer = createServer(app);

// ✅ Add CORS middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173", // Fallback if env var not set
  credentials: true, // Allow cookies if needed
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:5173", // ✅ Ensure frontend is allowed
    credentials: true,
  },
});

app.set("io", io); // Mounting the `io` instance on the app

// Chat App Routes
app.use("/api/v1/chat-app/chats", chatRouter);
app.use("/api/v1/chat-app/messages", messageRouter);
app.use("/api/v1/users", userRouter);

// Initialize Socket.IO
initializeSocketIO(io);

// ✅ Ensure the server starts
const PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export { httpServer };
