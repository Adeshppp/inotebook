const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


//create a user using : POST "/api.auth/"
//doesn't require Auth
router.post('/',[
    body('email','Enter a valid Email').isEmail(),
    body('name','Enter a valid Name').isLength({ min: 3 }),
    body('password','Enter a valid Password').isLength({ min: 5 }),
],(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
    res.json({error: "Please Enter Unique Email", message:err.message})});

    // res.send(req.body)
}) 

module.exports = router