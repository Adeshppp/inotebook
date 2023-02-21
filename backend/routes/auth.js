const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "I.am*a&cOOL@DudE";
//create a user using : POST "/api/auth/createuser"
//  No Login required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("password", "Enter a valid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If there are errors , return bad requests and an error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether user with same email exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) return res.status(400).json({ error: " Email already exists" });

      const salt = await bcrypt.genSalt(10);
      console.log("salt is ", salt);
      secPass = await bcrypt.hash(req.body.password, salt);

      //creating new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //   .then(user => res.json(user))
      //   .catch(err=>{console.log(err)

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
      // res.json({error: "Please Enter Unique Email", message:err.message})});

      // res.send(req.body)
      // res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured!!!");
    }
  }
);

module.exports = router;
