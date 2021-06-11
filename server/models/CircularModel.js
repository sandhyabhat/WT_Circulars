import mongoose from "mongoose";

const cirularSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  departments: [String],
  selectedFile: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var CircularModel = mongoose.model("CircularModel", cirularSchema);

export default CircularModel;
