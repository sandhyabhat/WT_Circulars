import express from 'express';
import mongoose from 'mongoose';
import CircularModel from '../models/CircularModel.js';

const router = express.Router();

export const getCirculars = async (req, res) => { 
    try {
        const circulars = await CircularModel.find();
                
        res.status(200).json(circulars);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCircular = async (req,res) => {
    const data = req.query;
    console.log(data);
    try {
        const circulars = await CircularModel.find(data);
        res.status(200).json(circulars);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}
 
export const createCircular = async (req,res) => {
    try {
        const data = req.body;
        const circular  = await CircularModel.create(data);
        res.status(200).json(circular);
    }  catch (error) {
        res.status(404).json({message: error.message});
    }
}