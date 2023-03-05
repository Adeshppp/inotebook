const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser")

const JWT_SECRET = "I.am*a&cOOL@DudE";
// Route 1 : Create a user using : POST "/api/auth/createuser"
//  No Login required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("password", "Enter a valid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success=false;
    // If there are errors , return bad requests and an error
    // console.log(req)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    //check whether user with same email exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).json({success, error: " Email already exists" });

      const salt = await bcrypt.genSalt(10);
      console.log("salt is ", salt);
      secPass = await bcrypt.hash(req.body.password, salt);

      //creating new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authToken });
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!!!");
    }
  }
);

// Route 2 : Authenticate a user using : POST "/api/auth/login"
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter a valid Password").isLength({ min: 5 }).exists(),
  ],
  async (req, res) => {
    let success=false;
    // If there are errors , return bad requests and an error
    const errors = validationResult(req);

    //checking whether user has entered the password or not
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    // destructuring to get email and password from user in appropriate variables
    const { email, password } = req.body;

    // checking whether email is exist in DB or not.
    try {
      let user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ success,error: "Invalid Credentials." });

      // comparing entered password with password in db
      const passCompare = await bcrypt.compare(password, user.password);// takes string and hashed string to compare

      if (!passCompare) return res.status(400).json({success, error: "Invalid Credentials." });
        
      // if password is correct then sending user data means giving access to account
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authToken });
    } 

    // if email is not in DB then catch the error and send error
    catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!!!");
    }
  }
);

// Route 3 : Get Logged in user details using : POST "/api/auth/getuser"   
// Login required
router.post(// using fetcghUser middleware
  "/getuser",fetchUser, async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password");//select all fields except password
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!!!");
    }
  }
);





module.exports = router;
// jkhbdsjkbfadsfad