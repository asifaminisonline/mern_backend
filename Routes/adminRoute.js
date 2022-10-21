import express from "express";
import AdminModel from "../Models/AdminModel.js";
const router = express.Router();

//GET ALL METHOD
router.get("/", async (req, res) => {
  try {
    const getAdmin = await AdminModel.find();
    res.status(200).json(getAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ONE METHOD
router.get("/:id", async (req, res) => {
  try {
    const getAdminDetails = await AdminModel.findById(req.params.id);
    res.status(200).json(getAdminDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});
//POST METHOD
router.post("/", async (req, res) => {
  const createAdmin = AdminModel(req.body);
  try {
    const savedAdmin = await createAdmin.save();
    res.status(200).json(savedAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE METHOD
router.put("/:id", async (req, res) => {
  try {
    const updateAdminDetails = await AdminModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateAdminDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE METHOD
router.delete("/:id", async (req, res) => {
  try {
    await AdminModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Passenger account was deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
