const connection = require("../db");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.signinPost = async (req, res) => {
  let { email, password } = req.body;
  let sql = "SELECT * FROM account WHERE email = ?";
  connection.query(sql, [email], (err, results, fields) => {
    if (err) res.sendStatus(404);
    if (results.length === 0) {
      res.json({
        error: "email",
      });
    } else {
      console.log(results[0].password);
      bcrypt.compare(password, results[0].password, function (err, result) {
        // if result == true, password matched
        // else wrong password
        // console.log(results);
        // console.log(password);
        if (result) {
          console.log(results[0]);

          // Create token by jwt
          const token = jwt.sign(
            {
              //results[0].email + " " + results[0].privilege,
              data:{
                email: results[0].email,
                privilege: results[0].privilege,
                userName: results[0].first_name + " " + results[0].last_name
              }
            },
            process.env.JWT_KEY,
            { expiresIn: 60 * 30 }
          );

          // Send token
          res.json({
            token: token
          });
        } else {
          res.json({
            error: "password",
          });
        }
      });
    }
  });
};
