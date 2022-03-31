const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const { User } = require("../models/user");

const router = express.Router();

//Post request to create a new user
router.post("/", async (req, res) => {
  //Validate data with Joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //Check if user exists
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send("User with that email already exists");

    const { name, email, password } = req.body;
    //Create new user
    user = new User({
      name,
      email,
      password,
    });

    //Use bcrypt to hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //Automatically sign user in once they have registered
    //Generate jwt & send to client
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      secretKey
    );

    res.send(token);

    res.send("User created");
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;
