import express from "express";
import http from "http";
import WebSocket from "ws";
const app = express();
//app 앞단 server 뒷단 js
app.set("view engine", "pug");
app.set("views", __dirname + "/view"); //__dirname 현재실행하는 파일의 절대경로
app.use("/public", express.static(__dirname + "/public"));
const handleListen = () => console.log("listening on http://localhost:3000 ");

app.get("/", (req, res) => res.render("home"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  console.log("connected to Browser");
  socket.on("close", () => {
    console.log("Disconnected from client");
  });
  socket.on("message", (message) => {
    console.log(message.toString("utf-8"));
  });

  socket.send("hello");
});

server.listen(3000, handleListen);
