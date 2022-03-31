const events = require("./routes/events");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet")

require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use("/api/events", events);
app.use("/api/signup", signUp);
app.use("/api/signin", signIn);
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

//Set the connection string for MongoDB
const connection_string = process.env.CONNECTION_STRING;

//Set the dynamic port.
const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`App server is listening on PORT ${PORT}`);
});

//Connect to MongoDB database
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection failed", error.message));

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
