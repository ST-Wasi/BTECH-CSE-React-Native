import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: ["seller", "buyer"],
      default: "buyer",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
