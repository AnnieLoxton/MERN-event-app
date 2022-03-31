const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 200 },
  description: String,
  eventDate: String,
  price: Number,
  date: { type: Date, default: new Date() },
  author: String,
  uid: String,
});

const Event = mongoose.model("Event", eventSchema);

exports.Event = Event;
