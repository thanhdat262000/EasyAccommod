const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports.authUser = async (req, res, next) => {
  if (req.headers["x-access-token"] == null) {
    res.status(403);
    return res.send("You need to sign in");
  }
  jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_KEY,
    (err, decoded) => {
      try {
        if (err) throw err;
        else {
          req.id = decoded.data.id;
          next();
        }
      } catch (err) {
        console.log(err);
        res.sendStatus(401);
      }
    }
  );
};

module.exports.authRole = (role) => {
  return async (req, res, next) => {
    jwt.verify(
      req.headers["x-access-token"],
      process.env.JWT_KEY,
      (err, decoded) => {
        try {
          if (err) throw err;
          else {
            let roleDecode = decoded.data.privilege;
            if (role !== roleDecode) {
              res.status(401);
              res.send("Not Allowed");
            } else {
              req.id = decoded.data.id;
              next();
            }
          }
        } catch (err) {
          console.log(err);
          res.sendStatus(401);
        }
      }
    );
  };
};
