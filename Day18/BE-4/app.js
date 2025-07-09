import express from "express";
import mongoose from "mongoose";
import { Student } from "./modals/Student.js";
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mangoDB")
  .then(() => {
    console.log("Databse Connected");
  })
  .catch((err) => {
    console.log("Error Occured WHile Connecting Database");
  });

app.post("/create-student", async (req, res) => {
  try {
    const { regitrationId, name, email, course, age } = req.body;
    if (!regitrationId) {
      return res.json({ message: "Registration Id Not Provided" });
    }
    if (!name) {
      return res.json({ message: "Name Id Not Provided" });
    }
    if (!email) {
      return res.json({ message: "Email Id Not Provided" });
    }
    if (!course) {
      return res.json({ message: "COurse Id Not Provided" });
    }
    if (!age) {
      return res.json({ message: "Age Id Not Provided" });
    }
    await Student.create({
      regitrationId,
      name,
      email,
      course,
      age,
    });
    res.json({ message: "Student Created" });
  } catch (error) {
    return res.json({
      message: "Error Occured While Creating Student",
      error: error,
    });
  }
});

app.get("/get-students", async (req, res) => {
  try {
    const students = await Student.find({});
    return res.json(students);
  } catch (error) {
    return res.json({
      message: "Error Occured While Getting Students",
      error: error,
    });
  }
});

app.get("/get-student/:id", async (req, res) => {
  try {
    const params = req.params;
    if (!params.id) {
      return res.json({
        message: "Id Not Provided",
      });
    }
    const student = await Student.findById(req.params.id);
    return res.json(student);
  } catch (error) {
    return res.json({
      message: "Error Occured While Getting Single Students",
      error: error,
    });
  }
});
app.listen(8080, () => {
  console.log("Server Started");
});
