const { Event } = require("../models/event");
const auth = require("../middleware/auth");
const express = require("express");

//Using Joi for data validation
const Joi = require("joi");

const router = express.Router();

//Get request - GENERAL USER
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });

    res.send(events);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//Get request - ADMIN USER
router.get("/admin", auth, async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });

    res.send(events);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

// //Post request - ADMIN USER
router.post("/admin", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    description: Joi.string().min(3),
    eventDate: Joi.string(),
    price: Joi.number(),
    date: Joi.date(),
    author: Joi.string().min(3),
    uid: Joi.string()
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const { name, description, eventDate, price, date, author, uid } = req.body;

  let event = new Event({ name, description, eventDate, price, date, author, uid });

  event = await event.save();
  res.send(event);
});

// //Put request - ADMIN USER
router.put("/admin/:id", auth, async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    description: Joi.string().min(3),
    eventDate: Joi.string(),
    price: Joi.number(),
    date: Joi.date(),
    author: Joi.string().min(3),
    uid: Joi.string()
  });

  const { error } = schema.validate(req.body);

  //if error, send error message & terminate creating of document
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //Check to see if the event exists
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    const { name, description, eventDate, price, date, author, uid } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        eventDate,
        price, 
        date,
        author,
        uid
      },
      { new: true }
    );

    res.send(updatedEvent);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});


//Delete request - ADMIN USER
router.delete("/admin/:id", auth, async (req, res) => {
  try {
    //Check to see if event exists
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    res.send(deletedEvent);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;
