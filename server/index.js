import { Server } from "socket.io";
import connectDb from "./db.js";
import {
  getDocument,
  updateDocument,
} from "./controller/documentController.js";

const PORT = 5000;
connectDb();
const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (docId) => {
    const document = await getDocument(docId);

    socket.join(docId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      // console.log(delta);
      socket.broadcast.to(docId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await updateDocument(docId, data);
    });
  });
});
