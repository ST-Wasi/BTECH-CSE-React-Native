import jwt from "jsonwebtoken";
import { User } from "../modals/User.js";

export async function isAUtheticated(req, res, next) {
  try {
    const headers = req.headers;
    const token = headers.token;
    if (!token) {
      return res.status(401).json({
        message: "You are Not Authorized to Acess This Route",
      });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.userId);
    if (user.token) {
      next();
    } else {
      return res.status(401).json({
        message: "You are Not Authorized to Acess This Route. Please Login",
      });
    }
  } catch (error) {}
}
