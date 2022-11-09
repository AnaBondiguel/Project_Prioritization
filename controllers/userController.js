import User from "../models/userModel.js";
import { validationResult } from "express-validator";

//  * update users
export const updateUser = async (req, res) => {
  try {
    // Finds the validaiton errores in this requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }

    const { id } = req.params;

    await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(req.body);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// *get user details
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// *get all users info
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// ! delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndRemove(id);
  res.json({ message: "User deleted successfully" });
};
