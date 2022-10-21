import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import bodyParser from "body-parser";
//////////////////////////Importing Routes////////////////////////////
import driverRouter from "./Routes/driverRoute.js";
import vehicleRoute from "./Routes/vehicleRoute.js";
import passengerRoute from "./Routes/passengerRoute.js";
import adminRoute from "./Routes/adminRoute.js";

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.json({ users: ["Tanveer", "Zulkarnain", "Mahrukh"] });
});

const connect = async () => {
  // creating a connecton for mongodb with error handling
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("connected", () => {
  console.log("Mongodb Connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb Disconnected");
});

// Middlewares
app.use(express.json());
app.use("/driver", driverRouter);
app.use("/vehicle", vehicleRoute);
app.use("/passenger", passengerRoute);
app.use("/admin", adminRoute);

app.listen(4000, () => {
  connect();
  console.log("connected console");
});
