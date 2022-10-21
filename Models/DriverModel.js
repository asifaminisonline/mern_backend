import mongoose from "mongoose";
const DriverSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  reg: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // photo: {
  //   type: [String],
  // },
});
export default mongoose.model("DriverModel", DriverSchema);
