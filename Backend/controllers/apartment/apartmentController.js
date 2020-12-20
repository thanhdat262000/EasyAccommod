const e = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const connection = require("../../db");

module.exports.renderId = async (req, res) => {
  const id = req.params.id;
  const sqlView = `UPDATE apartment_detail SET view = view + 1 WHERE apartment_detail.apartment_id = ?`;
  try{
    connection.query(sqlView, [id], async(err, results, fields) => {
      if(err) throw err;
    })
  }catch(err){
    res.sendStatus(400)
  }
  const sql = `SELECT CONCAT(account.first_name, " ", account.last_name) AS name, city.name AS city, district.name AS district,account.phone, apartment_detail.*
                    FROM apartment 
                    JOIN apartment_detail ON apartment_detail.apartment_id = apartment.apartment_id 
                    JOIN account ON apartment.account_id = account.account_id 
                    JOIN city ON apartment.city_id = city.city_id
                    JOIN district ON district.city_id = city.city_id
                    WHERE apartment.apartment_id = ?`;
  try {
    connection.query(sql, [id], async (err, results, fields) => {
      if (err) throw err;
      res.json(results[0]);
    });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.favorite = async (req, res) => {
  const apartment_id = req.params.id;

  // Decode token
  jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_KEY,
    (err, decoded) => {
      if (err) console.log(err);
      else {
        // console.log(decoded);
        let idDecode = decoded.data.id;
        let doneInsert = true;

        // Check exist like apartment
        const checkExist = `SELECT * FROM favorite WHERE account_id = ?`;
        connection.query(
          checkExist,
          [idDecode],
          async (err, results, fields) => {
            console.log(results);
            if (results.length !== 0) doneInsert = false;
            // console.log(doneInsert);

            // If dont exist favorite in database
            if (doneInsert === true) {
              const sql =
                "INSERT INTO favorite SET account_id=?, apartment_id=?, status=?";
              const sqlFavorite = `UPDATE apartment_detail SET favorite = favorite + 1 WHERE apartment_detail.apartment_id = ?`
              connection.query(
                sql,
                [idDecode, apartment_id, 1],
                (err, results, fields) => {
                  try {
                    if (err) throw err;
                    connection.query(sqlFavorite, [apartment_id], async(err, results, fields) => {
                      if(err) throw err;
                      res.json({ isFavorite: true });
                    })
                  } catch (err) {
                    res.status(400);
                    res.send(err);
                  }
                }
              );
            }

            // And else ...
            else {
              const changeLike = `UPDATE favorite SET status = ? WHERE apartment_id = ? AND account_id = ?`;
              const increasingFavorite = `UPDATE apartment_detail SET favorite = favorite + 1 WHERE apartment_detail.apartment_id = ? `;
              const decreasingFavorite = `UPDATE apartment_detail SET favorite = favorite - 1 WHERE apartment_detail.apartment_id = ? `;
              connection.query(
                changeLike,
                [!results[0].status, apartment_id, idDecode],
                (err, result, fields) => {
                  try {
                    if (err) throw err;
                    const data = { isFavorite: results[0].status === 1 };
                    if(data){
                      connection.query(increasingFavorite, [apartment_id], async(err, results, fields) => {
                        if(err) throw err;
                        res.json(data);
                      })
                    }
                  } catch (err) {
                    res.status(400);
                    res.send(err);
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

module.exports.comment = async (req, res) => {
  const { comment } = req.body;
  const apartment_id = req.params.id;
  jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_KEY,
    (err, decoded) => {
      if (err) console.log(err);
      else {
        console.log(decoded);
        let idDecode = decoded.data.id;
        const sql =
          "INSERT INTO comment SET  status=?, account_id=?, apartment_id=?, comment=? ";
        connection.query(
          sql,
          [0, idDecode, apartment_id, comment],
          (err, results, fields) => {
            try {
              if (err) throw err;
              res.sendStatus(200);
            } catch (err) {
              res.status(400);
              return res.send(err);
            }
          }
        );
      }
    }
  );
};

module.exports.report = async (req, res) => {
  const { report } = req.body;
  const apartment_id = req.params.id;
  jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_KEY,
    (err, decoded) => {
      if (err) console.log(err);
      else {
        console.log(decoded);
        let idDecode = decoded.data.id;
        const sql =
          "INSERT INTO report SET status=?, account_id=?, apartment_id=?, report=? ";
        connection.query(
          sql,
          [0, idDecode, apartment_id, report],
          (err, results, fields) => {
            try {
              if (err) throw err;
              res.sendStatus(200);
            } catch (err) {
              res.status(400);
              return res.send(err);
            }
          }
        );
      }
    }
  );
};
