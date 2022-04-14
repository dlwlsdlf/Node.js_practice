const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(message){
  const ul = room.querySelector("ul")
  const li = document.createElement("li")
  li.innerText = message;
  ul.appendChild(li);
}


function showRoom(msg) {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  //첫번째 인자 이벤트 이름 두번째 인자 json , 세번째 콜백
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}
//2.2 소켓io이용하기까지
form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome",()=>{
  addMessage("someone joined");
});