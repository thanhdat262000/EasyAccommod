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
    if(privilege === 'user'){
      let sqlUser =
        `INSERT INTO account set email = ?, password = ?, privilege = ?, first_name = ?, last_name =?, phone = ?, idCard = ?, status = 'Đã duyệt'`;
      connection.query(
        sqlUser,
        [email, hashPassword, privilege, firstName, lastName, phone, idCard],
        (err, results, fields) => {
          if (err) res.sendStatus(400);
          else {
            res.status(200);
            const token = jwt.sign(
              {
                //results[0].email + " " + results[0].privilege,
                data: {
                  email: email,
                  privilege: privilege,
                  userName: firstName + " " + lastName,
                },
              },
              process.env.JWT_KEY,
              { expiresIn: 60 * 300 }
            );

            // Send token
            res.json({
              token: token,
            });
          }
        }
      );
    }
    else if(privilege === 'owner'){
      let sqlOwner =
        "INSERT INTO account set email = ?, password = ?, privilege = ?, first_name = ?, last_name =?, phone = ?, idCard = ?";
      connection.query(
        sqlOwner,
        [email, hashPassword, privilege, firstName, lastName, phone, idCard],
        (err, results, fields) => {
          if (err) res.sendStatus(400);
          else {
            res.status(200);
            const token = jwt.sign(
              {
                //results[0].email + " " + results[0].privilege,
                data: {
                  email: email,
                  privilege: privilege,
                  userName: firstName + " " + lastName,
                },
              },
              process.env.JWT_KEY,
              { expiresIn: 60 * 300 }
            );

            // Send token
            res.json({
              token: token,
            });
          }
        }
      );
    }
  });
};
