const connection = require('../db')

module.exports.signinPost = (req, res) => {
    const user = req.body.username;
    const password = req.body.password;
    const sql = "SELECT * FROM account WHERE account_name=? AND password=?";
    connection.query(sql,[user, password], (err, results, fields) => {
        results.length !== 0 ? res.send(results) : res.senStatus(401)
    })
}