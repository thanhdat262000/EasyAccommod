const connection = require('../db');

// Send all apartments
module.exports.index = async(req, res) => {
    const sql = `SELECT apartment.apartment_id, apartment_detail.price, city.name AS city, district.name AS district
        FROM apartment 
        JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id 
        JOIN city ON apartment.city_id = city.city_id 
        JOIN district ON district.city_id = city.city_id`;
    connection.query(sql,(err, results, fields) => {
        if(err) res.sendStatus(400)
        res.json(results);
    })
}