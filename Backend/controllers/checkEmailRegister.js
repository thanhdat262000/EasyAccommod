const connection = require("../db");

module.exports.checkEmail = async(req, res) => {
    let sql = "SELECT * FROM account WHERE email = ?";
    connection.query(sql, [req.body.email], (err, results, fields) => {
        if(err) res.sendStatus(404);
        if(results.length !== 0){
            res.json({
                isExist: true
            })
        }
        else{
            res.json({
                isExist: false
            })
        }
    })
}