import express from "express";
import PassengerModel from "../Models/PassengerModel.js";
const router = express.Router();
//GET ALL METHOD
router.get("/", async (req, res) => {
  try {
    const getPassengers = await PassengerModel.find();
    res.status(200).json(getPassengers);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE METHOD
router.get("/:id", async (req, res) => {
  try {
    const getPassengerDetails = await PassengerModel.findById(req.params.id);
    res.status(200).json(getPassengerDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});
//POST METHOD
router.post("/", async (req, res) => {
  const newPassenger = PassengerModel(req.body);
  try {
    const savedPassenger = await newPassenger.save();
    res.status(200).json(savedPassenger);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE METHOD
router.put("/:id", async (req, res) => {
  try {
    const updatepassengerDetails = await PassengerModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatepassengerDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE METHOD
router.delete("/:id", async (req, res) => {
  try {
    await PassengerModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Passenger account was deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
