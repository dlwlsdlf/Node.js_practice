const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function backendDone(msg) {
  console.log(`The backend says: `, msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  //첫번째 인자 이벤트 이름 두번째 인자 json , 세번째 콜백
  socket.emit("enter_room",input.value,backendDone);
  input.value = "";
}
//2.2 소켓io이용하기까지
form.addEventListener("submit", handleRoomSubmit);
