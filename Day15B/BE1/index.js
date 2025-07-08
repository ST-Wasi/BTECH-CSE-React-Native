import express from "express";
const app = express();
import fs from "fs";

app.use(express.json());

app.get("/users", (req, res) => {
  fs.readFile("student.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    res.json(parsedData);
  });
});

app.get("/user/:id", (req, res) => {
  const params = req.params;

  fs.readFile("student.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    const findUSer = parsedData.STUDENTS.find((item) => item.id == params.id);
    if (findUSer.name) {
      res.json(findUSer);
      return;
    }
    res.json({
      message: "User not Exist",
    });
  });
});

app.put("/user/:id", (req, res) => {
  const user = req.body;
  let parsedData;
  fs.readFile("student.json", "utf-8", (err, data) => {
    parsedData = JSON.parse(data);
    parsedData.STUDENTS.push(user);
    const stringData = JSON.stringify(parsedData);
    fs.writeFile("student.json", stringData, (err) => {
      if (!err) {
        console.log("File Written");
      }
    });
  });
  res.send("something");
});

app.listen(8080, () => {
  console.log("Server is Running");
});
