import express from "express"; // es6 module version
// const express = require("express") //Old version (common js version)
import mongoose from "mongoose";
import path from "path";
import { User } from "./modals/User.js";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
mongoose
  .connect("mongodb://localhost:27017/demo")
  .then((data) => {
    console.log("Database Connnected");
  })
  .catch((err) => {
    console.log("Error on Connecting DB");
  });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.render("index", {
    name: "Wasi",
  });
});

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
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

app.post("/user", async (req, res) => {
  const { email, password, name } = req.body;
  //   new User({
  //     email,
  //     password,
  //     name,
  //   });
  //   await User.save();
  await User.create({
    email,
    name,
    password,
  });
  res.send("Success");
  //   let parsedData;
  //   fs.readFile("student.json", "utf-8", (err, data) => {
  //     parsedData = JSON.parse(data);
  //     parsedData.STUDENTS.push(user);
  //     const stringData = JSON.stringify(parsedData);
  //     fs.writeFile("student.json", stringData, (err) => {
  //       if (!err) {
  //         console.log("File Written");
  //       }
  //     });
  //   });
  //   res.send("something");
});

app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("student.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    let findStudent = parsedData.STUDENTS.find((item) => item.id == id);
    const fikteredSTudentsArray = parsedData.STUDENTS.filter(
      (item) => item.id != id
    );
    findStudent.name = "Wasi New Name";
    fikteredSTudentsArray.push(findStudent);
    fs.writeFile("student.json", JSON.stringify(fikteredSTudentsArray), () => {
      console.log("Editing Done");
    });
  });
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("student.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    const newData = parsedData.STUDENTS.filter((item) => item.id != id);
    fs.writeFile("student.json", JSON.stringify(newData), () => {
      console.log("Data Edited Done");
    });
  });
});

app.listen(8080, () => {
  console.log("Server is started");
});
