const connection = require("../db");

module.exports.index = async (req, res) => {
    res.send("Index" + req.id);
}

module.exports.apartmentsQueue = async (req, res) => {
    const sql = "SELECT * FROM apartment WHERE isApproved=FALSE OR isApproved IS NULL";

    connection.query(sql, (err, results, fields) => {
        if(err) return res.sendStatus(404);
        res.json(results);
    })
}
