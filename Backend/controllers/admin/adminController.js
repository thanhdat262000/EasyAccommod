const connection = require("../../db");

module.exports.index = async (req, res) => {
    res.send("Index admin" + req.id);
}

module.exports.getAllOwners = async (req, res) => {
    const sql = `SELECT account.account_id, account.email, CONCAT(account.first_name + " " + account.last_name) AS name, account.phone, account.address, account.idCard
    FROM account 
    WHERE account.privilege = 'owner'`;
    connection.query(sql, async(err, results, fields) => {
        if(err) res.sendStatus(400);
        res.json(results);
    })
}

module.exports.getAllApartmentPost = async (req, res) => {
    const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id`;
    connection.query(sql, async(err, results, fields) => {
        if(err) res.sendStatus(400);
        res.json(results);
    })
}