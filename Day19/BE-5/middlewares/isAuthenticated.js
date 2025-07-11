import jwt from "jsonwebtoken";
import { User } from "../modals/User.js";

export async function isAUtheticated(req, res, next) {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({
        message: "You are Not Authorized to Acess This Route",
      });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.userId);
    if (user.token) {
      req.user = user;
      next();
    } else {
      return res.status(401).json({
        message: "You are Not Authorized to Acess This Route. Please Login",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Token is Expired on Invalid",
    });
  }
}
