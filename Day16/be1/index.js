const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("database.txt", "utf-8", (err, data) => {
    console.log("Data-->", data);
  });
  res.send("Healthy 😉");
});

app.post("/user", (req, res) => {
  console.log("POst request Hit", req.body);
  fs.writeFile("wasi.txt", "My name is Wasi, i am developer", () => {
    console.log("File Written");
  });
  res.send("Post Request Done");
});

app.listen(8080, () => {
  console.log("Server Started");
});
