const connection = require('../db');

module.exports.index = async(req, res) => {
    const sql = "SELECT * FROM apartment";
    connection.query(sql,(err, results, fields) => {
        res.json(results);
    })
}

module.exports.pagination = async(req, res) => {
    const page = req.params.id;
    const apartmentEachPage = 2;
    const begin = (page-1)*apartmentEachPage;
    const end = begin + apartmentEachPage;
    const sql = "SELECT * FROM apartment";
    connection.query(sql, (err, results, fields) => {
        results = results.slice(begin, end);
        results.length !== 0 ? res.json(results) : res.sendStatus(404);
    })
}