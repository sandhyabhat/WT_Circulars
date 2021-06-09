import express, { query } from "express";
import mongoose from "mongoose";
import CircularModel from "../models/CircularModel.js";

const router = express.Router();

export const getCirculars = async (req, res) => {
  try {
    const circulars = await CircularModel.find();

    return res.status(200).json(circulars);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getCircular = async (req, res) => {
  const data = req.query;
  console.log(data);
  const { title, dept_name, day, month, year } = data;
  try {
    var circulars = [];
    var query = {};
    if (title) query["title"] = { $regex: title, $options: "i" };
    if (dept_name) query["departments"] = dept_name;
    if (title || dept_name) {
      circulars = await CircularModel.find(query);
    } else {
      circulars = await CircularModel.find();
    }
    return res.status(200).json(circulars);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createCircular = async (req, res) => {
  try {
    const data = req.body;
    const circular = await CircularModel.create(data);
    return res.status(200).json(circular);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
