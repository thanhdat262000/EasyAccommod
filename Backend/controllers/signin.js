const connection = require('../db');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports.signinPost = async(req, res) => {
    let {email ,password} = req.body;
    let sql = "SELECT password, email, privilege FROM account WHERE email = ?";
    connection.query(sql, [email], (err, results, fields) => {
        if(err) res.sendStatus(404);
        // console.log(results);
        if(results.length === 0){
            res.send("You must register if you want to signin")
        }
        else{
            console.log(results[0].password);
            bcrypt.compare(password, results[0].password, function(err, result) {
                // if result == true, password matched
                // else wrong password
                // console.log(result);
                // console.log(password);
                // console.log(results[0].password);
                if(result){
                    console.log(results[0]);

                    // Create token by jwt
                    const token = jwt.sign({
                        data: results[0].email + ' ' + results[0].privilege
                    }, process.env.JWT_KEY, {expiresIn: 60*30});
                    // Send token
                    res.send(token);
                }
                else{
                    res.sendStatus(403);
                }
            });
        }
    })
}