const connection = require('../db');

const bcrypt = require('bcrypt');

module.exports.signinPost = (req, res) => {
    let {email ,password} = req.body;
    let sql = "SELECT password FROM account WHERE account_name = ?";
    connection.query(sql, [email], (err, hashPassword, fields) => {
        if(err) res.sendStatus(404);
        if(password.length === 0){
            res.send("You must register if you want to signin")
        }
        else{
            console.log(hashPassword[0].password);
            bcrypt.compare(password, hashPassword[0].password, function(err, result) {
                // if result == true, password matched
                // else wrong password
                console.log(hashPassword);
                console.log(password);
                if(result){
                    res.send("You're " + email)
                }
                else{
                    res.sendStatus(403);
                }
            });
        }
    })
}