const connection = require("../db");

module.exports.authSignin = async(req, res, next) => {
    const {
        email
    } = req.body;
    const sql = `SELECT * FROM account WHERE email = ? AND status = "Đã duyệt"`;
    try{
        connection.query(sql, [email] , (err,results, fields) => {
            if(err) throw err;
            if(results.length === 0) res.sendStatus(401);
            else next();
        })
    }catch(err){
        res.sendStatus(400);
    }
}