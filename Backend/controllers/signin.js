const connection = require("../db");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.signinPost = async(req, res) => {
    let {email ,password} = req.body;
    let sql = "SELECT * FROM account WHERE email = ?";
    connection.query(sql, [email], (err, results, fields) => {
        if(err) res.sendStatus(404);
module.exports.signinPost = async (req, res) => {
  let { email, password } = req.body;
  let sql = "SELECT password, email, privilege FROM account WHERE email = ?";
  connection.query(sql, [email], (err, results, fields) => {
    if (err) res.sendStatus(404);
    if (results[0].email.length === 0) {
      res.send("You must register if you want to signin");
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
              data: results[0].email + " " + results[0].privilege,
            },
            process.env.JWT_KEY,
            { expiresIn: 60 * 30 }
          );

          // Send token
          res.json({
            isLogin: true,
            token: token,
          });
        } else {
          res.json({ isLogin: false });

<<<<<<< HEAD
                    // Create token by jwt
                    const token = jwt.sign({
                        data: results[0].email + ' ' + results[0].privilege
                    }, process.env.JWT_KEY, {expiresIn: 60*30});
                    // Send token
                    let data = {
                        token: token,
                        userName: results[0].first_name + results[0].last_name
                    }
                    res.json(data)
                }
                else{
                    res.sendStatus(403);
                }
            });
=======
>>>>>>> 80fe26d846d6327ebdf099729eb7cfed57981898
        }
      });
    }
  });
};
