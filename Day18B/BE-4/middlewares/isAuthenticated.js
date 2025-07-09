import jwt from "jsonwebtoken";
import { User } from "../Modals/User.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const headers = req.headers;
    const verifyToken = jwt.verify(headers.token, process.env.JWT_SECRET);
    console.log("✌️verifyToken --->", verifyToken);
    const user = await User.findById(verifyToken.userId);
    if (!user) {
      return res.status(400).json({
        message: "User not Found",
      });
    }
    if (!user.token) {
      return res.status(401).json({
        message: "You are not Authorized to access this Route",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: "You are not Authorized to access this Route",
    });
  }
};
