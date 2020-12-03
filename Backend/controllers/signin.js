const connection = require('../db');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports.signinPost = (req, res) => {
    let {email ,password} = req.body;
    let sql = "SELECT password, account_name, privilege_id FROM account WHERE account_name = ?";
    connection.query(sql, [email], (err, results, fields) => {
        if(err) res.sendStatus(404);
        if(password.length === 0){
            res.send("You must register if you want to signin")
        }
        else{
            console.log(results[0].password);
            bcrypt.compare(password, results[0].password, function(err, result) {
                // if result == true, password matched
                // else wrong password
                console.log(results);
                console.log(password);
                if(result){
                    console.log(results[0]);

                    // Create token by jwt
                    const token = jwt.sign({
                        "user": results[0].account_name,
                        "privilege": results[0].privilege_id
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