const shortid = require("shortid");
const connection = require("../db");



module.exports.index = async (req, res) => {
    const { city_id, district_id, apartment_type, rent_min, rent_max, square_min, square_max,  } = req.query;
    res.send("Pending search apartment")
}

module.exports.renderId = async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT CONCAT(account.first_name, " ", account.last_name) AS name, account.phone, apartment_detail.* 
            FROM apartment 
            JOIN apartment_detail ON apartment_detail.apartment_id = apartment.apartment_id 
            JOIN account ON apartment.account_id = account.account_id WHERE apartment.apartment_id = ?`;
    connection.query(sql,[id] ,(err, results, fields) => {
        res.json(results);
    })
}

module.exports.favorite = async (req, res) => {
    const apartment_id = req.params.id;
    const { account_id, isFavorite } = req.body;
    const sql = "INSERT INTO favorite SET account_id=?, apartment_id=?, status=?";

    connection.query(sql, [ account_id, apartment_id, isFavorite], (err, results, fields) => {
        try{
            res.send("Data is added")
        }catch(err){
            res.send("Don't add a data. Please try again.")
        }
    })

}

module.exports.comment = async (req, res) => {
    const { account_id, comment} = req.body;
    const apartment_id = req.params.id;
    const status = 0;
    const sql = "INSERT INTO comment SET  status=?, account_id=?, apartment_id=?, comment=? ";
    connection.query(sql, [status, account_id, apartment_id, comment], (err, results, fields) => {
        try{
            res.send("Comment is added");
        }catch(err){
            res.send(err);
        }
    })
}

module.exports.report = async (req, res) => {
    res.json('Create a report apartment for a specific user')
}