import express, { query } from "express";
import mongoose from "mongoose";
import CircularModel from "../models/CircularModel.js";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const admin = require("firebase-admin");
import { bucketURL, firebaseInitialize } from "../config/firebase_config.js";
const firebase = firebaseInitialize();
const { Storage } = require("@google-cloud/storage");
import path from "path";

const serviceAccount = require("../config/circulars-677f1-9a7ae65e6f7a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: bucketURL,
});
const bucket = admin.storage().bucket();

const router = express.Router();

const uploadFile = async (filePath) => {
  var mediaURL = null;
  try {
    const response = await bucket.upload(filePath, {
      public: true,
      metadata: {
        contentDisposition: "inline",
      },
    });
    // const data = await response.json();
    console.log(`${filePath} uploaded....}`);
    return response[0]["metadata"]["mediaLink"];
  } catch (err) {
    console.log(err);
  }
};

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
    var token = req.header.token;
    // get the user id from the token in firebase
    var userId = await admin
      .auth()
      .getUser(token)
      .then(function (user) {
        return user.uid;
      })
      .catch((err) => res.status(404).json({ message: err.message }));

    var ref = firebase.database().ref("users/" + userId);
    ref
      .get()
      .then(async (snapshot) => {
        var userType = snapshot.val().type;
        if (userType !== "teacher") {
          return res
            .status(404)
            .json({ message: "You are not authorized to perform this action" });
        }
      })
      .catch((error) => {
        return res.status(404).json({ message: error.message });
      });
    var data = req.body;
    data["selectedFile"] = [];
    // console.log(req.files);
    var files = req.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var name = file.originalname;
      var result = name.split(".");
      var extension = result[result.length - 1];
      console.log("Extension", extension);
      // var mediaURL = await uploadFile("uploads/" + file.originalname);
      data["selectedFile"].push(mediaURL);
      console.log(mediaURL);
    }
    console.log(data);
    const circular = await CircularModel.create(data);
    return res.status(200).json(circular);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteCircular = async (req, res) => {
  try {
    var data = req.params;
    console.log(data);
    res.status(200).json({
      message: data,
    });
  } catch (err) {
    console.log(err);
  }
};

// create a function to update the circulars
export const updateCircular = async (req, res) => {
  var token = req.header.token;
  // get the user id from the token in firebase
  var userId = await admin
    .auth()
    .getUser(token)
    .then(function (user) {
      return user.uid;
    })
    .catch((err) => res.status(404).json({ message: err.message }));

  var ref = firebase.database().ref("users/" + userId);
  ref
    .get()
    .then(async (snapshot) => {
      var userType = snapshot.val().type;
      if (userType === "teacher") {
        var data = req.body;
        console.log(data);
        const circular = await CircularModel.update(data);
        return res.status(200).json(circular);
      } else {
        res
          .status(404)
          .json({ message: "You are not authorized to perform this action" });
      }
    })
    .catch((error) => {
      return res.status(404).json({ message: error.message });
    });
};
