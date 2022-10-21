import express from "express";
import VehicleModel from "../Models/VehicleModel.js";
const router = express.Router();
//GET ALL METHOD
router.get("/", async (req, res) => {
  try {
    const getAllVehicle = await VehicleModel.find();
    res.status(200).json(getAllVehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE METHOD
router.get("/:id", async (req, res) => {
  try {
    const getVehicleDetails = await VehicleModel.findById(req.params.id);
    res.status(200).json(getVehicleDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});
//POST METHOD
router.post("/", async (req, res) => {
  const newVehicle = VehicleModel(req.body);
  try {
    const savedVehicle = await newVehicle.save();
    res.status(200).json(savedVehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE METHOD
router.put("/:id", async (req, res) => {
  try {
    const updateVehicle = await VehicleModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateVehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE METHOD
router.delete("/:id", async (req, res) => {
  try {
    await VehicleModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Vehicle was deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
