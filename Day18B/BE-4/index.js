import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
// import allROutes from "./routes/index.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Databse Connected");
  })
  .catch((err) => {
    console.log("Error COnnecting DB");
  });

app.use("/api", userRoutes);
app.use("/api", productRoutes);

app.listen(8080, () => {
  console.log("Server Started");
});
