const connection = require("../db");

require("dotenv").config();

const bcrypt = require("bcrypt");
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
        if (err) res.sendStatus(404);
        else res.json({
          isRegister: true,
          notification: "Bạn đã đăng ký thành công",
          userName: firstName + lastName
        })
      }
    );
  });
};
