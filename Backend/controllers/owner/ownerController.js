const connection = require("../../db");

module.exports.getAllPending = async (req, res) => {
    const sql = `SELECT apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Chưa được duyệt' AND apartment.account_id = ?`;

    connection.query(sql,[req.id], (err, results, fields) => {
        if(err) return res.sendStatus(404);
        res.json(results);
    })
}
