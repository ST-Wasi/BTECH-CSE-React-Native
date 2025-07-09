const { name } = require("ejs");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    STUDENTS: [
        {
            name: "Wasi"
        },
        {
            name: "Sachin"
        },
        {
            name: "Ritik"
        },
        {
            name: "Aditya"
        }
    ],
  });
});

app.get("/user", (req, res) => {
  fs.readFile("student.json", "utf-8", (err, data) => {
    // NODEMON
    let parsedData = JSON.parse(data);
    console.log("✌️data --->", parsedData);
    res.json(parsedData);
  });
});

app.get("/userquery", (req, res) => {
  const { id } = req.query;
  fs.readFile("student.json", "utf-8", (err, data) => {
    let parsedData = JSON.parse(data);
    const user = parsedData.STUDENTS.find((item) => item.id == id);
    if (user) {
      res.json(user);
    } else {
      res.json({ message: "User not Found" });
    }
  });
});

app.put("/updateuser/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  fs.readFile("student.json", "utf-8", (err, data) => {
    let parsedData = JSON.parse(data);
    const user = parsedData.STUDENTS.find((item) => item.id == id);
    const filteredArray = parsedData.STUDENTS.filter((item) => item.id != id);
    user.name = name;
    filteredArray.push(user);
    let obj = {
      STUDENTS: filteredArray,
    };
    fs.writeFile("student.json", JSON.stringify(obj), () => {
      console.log("Student Updated");
      res.json({
        message: "User Updated",
      });
    });
  });
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("student.json", "utf-8", (err, data) => {
    let parsedData = JSON.parse(data);
    const filteredArray = parsedData.STUDENTS.filter((item) => item.id != id);
    let obj = {
      STUDENTS: filteredArray,
    };
    fs.writeFile("student.json", JSON.stringify(obj), () => {
      console.log("User Deleted");
      res.json({ message: "User Deleted Success" });
    });
  });
});

app.post("/user", (req, res) => {
  fs.readFile("student.json", "utf-8", (err, data) => {
    let parsedData = JSON.parse(data);
    parsedData.STUDENTS.push(req.body);
    fs.writeFile("student.json", JSON.stringify(parsedData), () => {
      console.log("File Edited Success");
      res.json({ message: "User Added" });
    });
  });
});

app.listen(8080, () => {
  console.log("Server Started");
});
