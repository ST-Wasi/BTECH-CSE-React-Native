import express from "express";
import { User } from "../Modals/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { isAdmin } from "../middlewares/isAdmin.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password, phone, role } = req.body;

    // if email and passowrd is not there then we need to sen dthe error mesage and status code 400
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email of Passowrd Not Provided" });
    }
    // here we have assurity that email and password is available with us

    // now we will check that the email we are getting from bosy is available in Db or not
    const user = await User.findOne({ email: email });

    if (user) {
      // if it is available then we dont need to register that user again
      return res.status(400).json({ message: "User Already Exist" });
    }

    // now in this line we have assurithy that user doesnt exist in DB

    // now will hash the passowrd
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // checking the hased passowrd
    console.log("✌️hashedPassword --->", hashedPassword);

    // ow finnaly we will create user
    await User.create({
      email,
      password: hashedPassword,
      phone: phone ? phone : "",
      token: "",
      fullname: fullname ? fullname : "",
      role: role ?? role,
    });
    return res.status(201).json({
      message: "User Registered",
    });
  } catch (error) {
    return res
      .json({
        message: "Error Occured while Registering User",
        error: error,
      })
      .status(400);
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // here we are cheincg is the email and passowrd is being passed from the body or not
    if (!email || !password) {
      res.status(400).json({
        message: "Email or passowrd not Provided",
      });
    }

    // now will match the passsword which is hashed in the user object in DB and which is coming from req body
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Please register first",
      });
    }
    // after the above if condition we have sureity that user is already registered iwth us and we can go ahead with login and token generation

    // password matching
    const isPassowrdMatched = bcrypt.compareSync(password, user.password);

    if (isPassowrdMatched) {
      // now if passwrd is mathced then we have to generate the tokebn and send it back to the Frontend
      let token;
      if (user.token) {
        token = user.token;
      } else {
        token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      }

      // checking the token
      console.log("✌️token --->", token);

      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        {
          token: token,
        },
        { new: true }
      );
      console.log("Updated User ->", updatedUser);
      return res.status(200).json(updatedUser);
    } else {
      return res.status(400).json({
        message: "Password Not Matched",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error Occured while Registering User",
      error: error,
    });
  }
});
router.get("/get-user", isAuthenticated, isAdmin, async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(400).json({
      message: "Error Occured while Getting User",
      error: error,
    });
  }
});

export default router;
