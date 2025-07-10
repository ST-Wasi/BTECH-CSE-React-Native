import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "./modals/User.js";
import { isAUtheticated } from "./middlewares/isAuthenticated.js";
import bcrypt from "bcrypt";
dotenv.config();
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Databse Conncted");
  })
  .catch((err) => {
    console.log("Error Connecting Databse");
  });

app.post("/register", async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    // here we are checing that email or passowrd coming from the frontend or not
    if (!email || !password) {
      return res.status(400).json({
        message: "Email or Password Not Provided",
      });
    }
    // now after this if condition i have surity that email and passowrd is with me
    // now we will check first rather the email if already in DB or not
    const user = await User.findOne({ email: email });
    // if user already exist then will ask user to login
    if (user) {
      return res.status(400).json({
        message: "User already Exist Please Login",
      });
    }

    // else will create the user
    // first will hash the passowrd so that we dont need to store the raw passowrd of the user
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    // checking the hashed pasowrd how it looks
    console.log("✌️hashedPassword --->", hashedPassword);

    await User.create({
      email,
      password: hashedPassword,
      fullname: fullname ?? "",
      token: "",
    });
    return res.status(201).json({
      message: "User Registered",
    });
  } catch (error) {
    console.log("✌️error --->", error);
    return res.status(400).json({
      message: "Error Registering User",
      error: error,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // will check here if email and passowrd is coming for sure or not
    if (!email || !password) {
      return res.status(400).json({
        message: "Email Or Password Not Provided",
      });
    }
    // sureity hai ke i have email and password both
    // now i iwll check weather the user with the coming email is already with us or not
    const user = await User.findOne({ email });
    // if no user exist then will request user to register first
    if (!user) {
      return res.status(400).json({
        message: "Please register first",
      });
    }

    // now we have surety that user is exit with us

    // so now will compare thier paswowrds 9the pasowrd whish is coming from body and the passowrd which we stored in DB )
    const isPasswordValid = bcrypt.compareSync(password, user.password); //  compareSync function retrurn true if paswrd match else fasle if not matched
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Passowrd not Matched",
      });
    }
    // we have surety the passowrd is also matched for the user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    // logging token for a check
    console.log("✌️token --->", token);

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        token: token,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "User Login Success",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error While Login",
    });
  }
});

app.get("/user", isAUtheticated, async (req, res) => {
  try {
    console.log("USer route Function Called");
    res.send("get user route");
  } catch (error) {}
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started at Port ${process.env.PORT}`);
});
