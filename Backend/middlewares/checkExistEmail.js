const connection = require("../db");

module.exports.checkExistEmail = async(req, res, next) => {
    let sql = "SELECT * FROM account WHERE email = ?";
    connection.query(sql, [req.body.email], (err, results, fields) => {
        if(err) res.sendStatus(404);
        if(results.length !== 0){
            res.json({
                notification: "Tài khoản đã được đăng ký",
                isExist: true
            })
        }
        else{
            next();
        }
    })
}