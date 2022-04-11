import express from "express";

const app = express();
//app 앞단 server 뒷단 js
app.set("view engine", "pug");
app.set("views", __dirname + "/view");//__dirname 현재실행하는 파일의 절대경로
app.use("/public", express.static(__dirname + "/public"));
const handleListen = () => console.log("listening on http://localhost:3000 ");

app.get("/", (req, res) => res.render("home"));
app.listen(3000, handleListen);
