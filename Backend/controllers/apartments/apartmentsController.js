const connection = require('../../db');
const jwt = require('jsonwebtoken');

// Send all apartments
module.exports.index = async(req, res) => {
    const sql = `SELECT apartment.apartment_id, apartment_detail.price, city.name AS city, district.name AS district
        FROM apartment 
        JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id 
        JOIN city ON apartment.city_id = city.city_id 
        JOIN district ON district.city_id = city.city_id`;
    connection.query(sql,(err, results, fields) => {
        try{
            if(err) throw err;
            res.json(results);
        }catch(err){
            console.log(err);
            res.sendStatus(400)
        }
    })
}

module.exports.getAllFavorite = async(req, res) => {
    jwt.verify( req.headers['x-access-token'], process.env.JWT_KEY, (err, decoded) => {
        try{
            if(err) throw err;
            else {
                console.log(decoded.data);
                let userId = decoded.data.id;
                const sql = `SELECT apartment_detail.price, apartment_detail.roomDescription, apartment_detail.addressDescription, (SELECT image.url FROM image WHERE image.apartment_id = apartment.apartment_id LIMIT 1) AS image_url
                FROM favorite
                JOIN apartment ON  apartment.apartment_id = favorite.apartment_id
                JOIN apartment_detail ON apartment_detail.apartment_id = apartment.apartment_id
                WHERE favorite.account_id = ? AND favorite.status = 1`

                connection.query(sql, [userId], (err, results, fields) => {
                    if(err) throw err;
                    res.json(results)
                })
            }
        }catch(err){
            console.log(err);
            res.sendStatus(401)
        }
    })
}