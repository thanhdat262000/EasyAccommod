const shortid = require("shortid");
const connection = require("../db");



module.exports.index = async (req, res) => {
    const { city_id, district_id, apartment_type, rent_min, rent_max, square_min, square_max,  } = req.query;
    res.send("Pending search apartment")
}

module.exports.renderId = async (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM apartment WHERE apartment_id=?";
    connection.query(sql,[id] ,(err, results, fields) => {
        res.json(results);
    })
}

module.exports.favorite = async (req, res) => {
    const apartment_id = req.params.id;
    const { account_id, isFavorite } = req.body;
    let data = {
        like_id: shortid.generate(),
        account_id: account_id,
        apartment_id: apartment_id,
        status: isFavorite
    }

    const sql = `INSERT INTO favorite(favorite_id, account_id, apartment_id, status) VALUES(${data});`

    connection.query(sql, (err, results, fields) => {
        try{
            res.send("Data is added")
        }catch(err){
            res.send("Don't add a data. Please try again.")
        }
    })

}

module.exports.comment = async (req, res) => {
    res.json('Create a comment apartment for a specific user')
}

module.exports.report = async (req, res) => {
    res.json('Create a report apartment for a specific user')
}