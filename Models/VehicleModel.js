import mongoose from "mongoose";
const VehicleSchema = new mongoose.Schema({
  vehicle_name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  registration_no: {
    type: String,
    required: true,
  },
  ac: {
    type: String,
    required: true,
  },
});
export default mongoose.model("VehicleModel", VehicleSchema);
