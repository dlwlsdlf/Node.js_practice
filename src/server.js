import express from "express";
import http from "http";
import SocketIO, { Socket } from "socket.io"
//import WebSocket from "ws";
const app = express();
//app 앞단 server 뒷단 js
app.set("view engine", "pug");
app.set("views", __dirname + "/view"); //__dirname 현재실행하는 파일의 절대경로
app.use("/public", express.static(__dirname + "/public"));
const handleListen = () => console.log("listening on http://localhost:3000 ");

app.get("/", (req, res) => res.render("home"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);


wsServer.on("connection", socket =>{
  console.log(socket);
});
/*
const wss = new WebSocket.Server({ server });
const sockets = [];
wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon";
  console.log("connected to Browser");
  socket.on("close", () => {
    console.log("Disconnected from client");
  });
  socket.on("message", (msg) => {
    const message = JSON.parse(msg);
    switch (message.type) {
      case "new_message":
        sockets.forEach((aSocket) =>
          aSocket.send(`${socket.nickname}: ${message.payload}`)
        );
      case "nickname":
        socket["nickname"] = message.payload;
    }
  });
});
*/
httpServer.listen(3000, handleListen);
