const jwt = require("jsonwebtoken");
const User = require("../models/users");

const auth = async (req, res, next) => {
  //console.log(req.header("Authorization").replace("Bearer ", ""));
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    //console.log(token);

    const decoded = jwt.verify(token, "thisismynewcourse");
    //console.log("hello");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    console.log(req.user);
    next();
    //console.log(token);
  } catch (e) {
    //console.log(decoded);
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
