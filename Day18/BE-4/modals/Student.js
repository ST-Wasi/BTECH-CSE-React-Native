import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  regitrationId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    enum: ["Btech", "MCA", "Mtech"],
  },
  age: {
    type: Number,
    required: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
