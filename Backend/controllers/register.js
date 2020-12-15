const connection = require("../db");

require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 5;

module.exports.register = async (req, res) => {
  let {
    email,
    password,
    firstName,
    lastName,
    phone,
    birthday,
    idCard,
    privilege,
  } = req.body;
  console.log(req.body);

  bcrypt.hash(password, saltRounds, (err, hashPassword) => {
    // Now we can store the password hash in db.
    let sql =
      "INSERT INTO account set email = ?, password = ?, privilege = ?, first_name = ?, last_name =?, phone = ?, idCard = ?";
    connection.query(
      sql,
      [email, hashPassword, privilege, firstName, lastName, phone, idCard],
      (err, results, fields) => {
        if (err) res.sendStatus(400);
        else {
          res.status(200);
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
        }
      }
    );
  });
};
