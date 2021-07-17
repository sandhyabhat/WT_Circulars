import { firebaseInitialize } from "../config/firebase_config.js";
const firebase = firebaseInitialize();
import { createRequire } from "module";
import { response } from "express";
const require = createRequire(import.meta.url);
const admin = require("firebase-admin");
const serviceAccount = require("../config/circulars-677f1-9a7ae65e6f7a.json");

if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

export const createNewUser = async (req, res) => {
  const { fname, lname, email, password, type } = req.body;
  firebase
  const { email, password } = req.body;
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      var ref = firebase.database().ref("users");
      ref.push({
        fname,
        lname,
        email,
        type,
        uid: user.uid,
        displayName: `${fname} ${lname}`,
      });
      //insert into firebase realtime database
      res.status(200).json({
        user: user,
        message: "User successfully created",
      });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        res.status(500).send({ message: "The password is too weak." });
      } else if (errorCode == "auth/email-already-in-use") {
        res.status(500).send({ message: "The email is already in use." });
      } else if (errorCode == "auth/invalid-email") {
        res.status(500).send({ message: "The email is invalid." });
      } else {
        res.status(500).send({ message: errorMessage });
      }
      console.log(error);
    });

  res.status(500).json({
    user: response.user,
    message: "User successfully created",
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.headers;
  console.log(token);

  const data = await admin.auth().verifyIdToken(token);
  res.status(500).json({
    message: data.email,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (response) => {
      const token = await response["user"].getIdToken();
      console.log(token);
      res.status(500).json({
        email: response["user"]["email"],
        token: token,
        message: "success",
      });
    })
    .catch((err) => {
      // console.log(err);
      if (err.code === "auth/user-not-found") {
        res.status(500).json({
          message: "no user",
        });
      }
    });
}

export const logout = async (req, res) => {
    const { token } = req.headers;
    console.log(token);
    firebase
      .auth()
      .signOut()
      .then(() => {
        res.status(200).json({
          message: "logged out",
        });
      })
      .catch((err) => {
        console.log(err);
      });
}