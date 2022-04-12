const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connecte to Server ");
});

socket.addEventListener("message", (message) => {
  console.log("New message : ", message.data, "from the server");
});

socket.addEventListener("close", () => {
  console.log("DisConnected from Server");
});

setTimeout(() => {
  socket.send("Hello from the browser!!");
}, 10000);
