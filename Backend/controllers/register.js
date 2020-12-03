const connection = require('../db');

require('dotenv').config()

const bcrypt = require('bcrypt');
const saltRounds = 5;

module.exports.register = async (req, res) => {
    let {email, password, firstName, lastName, phone, birthday, idCard, privilege} = req.body;

    let sql = "SELECT * FROM account WHERE account_name = ?"
    connection.query(sql, [email], (err, results, fields) => {

        // If query error => send not found
        if(err) res.sendStatus(404);

        // If user exist
        if(results.length !== 0){
            res.send("User exists");
        }

        // If dont find user in database
        else{
            if(privilege === 'admin' || privilege === 'owner' || privilege === 'user'){
                bcrypt.hash(password, saltRounds, (err, hashPassword) => {
                    // Now we can store the password hash in db.
                    let sql = "INSERT INTO account set account_name = ?, password = ?, privilege_id = ?, first_name = ?, last_name =?, phone = ?";
                    connection.query(sql, [email, hashPassword, privilege, firstName, lastName, phone], (err, results, fields) => {
                        if(err) res.sendStatus(404);
                        else res.send("Done");
                    })
                });
            } 
            else{
                res.sendStatus(404);
            }
        }
    })
}