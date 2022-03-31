const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  //Check if token exists
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Not authorised");

  //Verify token
  try {
    const secretKey = process.env.SECRET_KEY;
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
}

module.exports = auth;
