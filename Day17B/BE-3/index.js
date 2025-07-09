import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { isAuthenticated } from "./isAuthenticated.js";
import { User } from "./modals/User.js";
dotenv.config();
const app = express();

app.use(express.json());

// database connection
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error connecting Database");
  });

app.post("/create-user", async (req, res) => {
  try {
    const { email, password, fullname, phone } = req.body;

    if (!email) {
      return res.json({
        message: "Email Not Provided",
      });
    }
    if (!password) {
      return res.json({
        message: "Password Not Provided",
      });
    }
    if (!fullname) {
      return res.json({
        message: "Full Name Not Provided",
      });
    }
    if (!phone) {
      return res.json({
        message: "Phone Not Provided",
      });
    }
    // line 42
    await User.create({
      email,
      fullname,
      phone,
      password,
    });
    return res.json({
      message: "User created Successfully",
    });
  } catch (error) {
    console.log("✌️error --->", error);
    return res.json({
      message: "Error Occured while Creating User",
    });
  }
});

app.get("/get-user", async (req, res) => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (error) {
    console.log("✌️error --->", error);
    return res.json({
      message: "Error Occured while Getting User",
    });
  }
});

app.get("/get-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({
        message: "Id Not Provided",
      });
    }
    const user = await User.findById(id);

    if (!user) {
      return res.json({
        message: "User Not Found",
      });
    }
    return res.json(user);
  } catch (error) {
    console.log("✌️error --->", error);
    return res.json({
      message: "Error Occured while Getting Single User",
    });
  }
});

app.listen(8080, () => {
  console.log("Server Started");
});
