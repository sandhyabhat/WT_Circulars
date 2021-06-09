import { firebaseInitialize } from "../config/firebase_config.js";
const firebase = firebaseInitialize();

export const createNewUser = async (req, res) => {
  const { email, password } = req.body;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      res.status(200).json({
        user: user,
        message: "User successfully created",
      });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};
