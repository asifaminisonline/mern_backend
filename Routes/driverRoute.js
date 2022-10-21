import express from "express";
import DriverModel from "../Models/DriverModel.js";
const router = express.Router();
//GET ALL METHOD
router.get("/", async (req, res) => {
  try {
    const getAllDrivers = await DriverModel.find();
    res.status(200).json(getAllDrivers);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE METHOD
router.get("/:id", async (req, res) => {
  try {
    const getDriverDetails = await DriverModel.findById(req.params.id);
    res.status(200).json(getDriverDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});
//POST METHOD
router.post("/", async (req, res) => {
  const newDriver = DriverModel(req.body);
  try {
    const savedDriver = await newDriver.save();
    res.status(200).json(savedDriver);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE METHOD
router.put("/:id", async (req, res) => {
  try {
    const updateDriver = await DriverModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateDriver);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE METHOD
router.delete("/:id", async (req, res) => {
  try {
    await DriverModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Driver account was deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
