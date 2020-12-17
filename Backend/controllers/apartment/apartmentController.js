const e = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const connection = require("../../db");

module.exports.index = async (req, res) => {
  const {
    city_id,
    district_id,
    apartment_type,
    rent_min,
    rent_max,
    square_min,
    square_max,
  } = req.query;
  res.send("Pending search apartment");
};

module.exports.renderId = async (req, res) => {
  const id = req.params.id;
  jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_KEY,
    (err, decoded) => {
      try {
        if (err) throw err;
        console.log(decoded)
        if(decoded.data.id.length === 0){
          res.sendStatus(400);
        }
        else {
          let idAccount = decoded.data.id;
          const sql = `SELECT CONCAT(account.first_name, " ", account.last_name) AS name, city.name AS city, district.name AS district,account.phone, apartment_detail.*
                    FROM apartment 
                    JOIN apartment_detail ON apartment_detail.apartment_id = apartment.apartment_id 
                    JOIN account ON apartment.account_id = account.account_id 
                    JOIN city ON apartment.city_id = city.city_id
                    JOIN district ON district.city_id = city.city_id
                    WHERE apartment.apartment_id = ?`;
          let getLike = `SELECT favorite.status AS favorite 
                    FROM favorite
                    WHERE favorite.account_id = ? AND apartment_id = ? LIMIT 1`;
          connection.query(sql, [id], async (err, results, fields) => {
            if (err) throw err;
            // console.log(results[0])
            connection.query(
              getLike,
              [idAccount, id],
              (err, getLike, fields) => {
                if (err) throw err;
                console.log(getLike);
                if (getLike.length === 0) results[0].favorite = 0;
                else {
                  getLike[0].favorite === 1
                    ? (results[0].favorite = 1)
                    : (results[0].favorite = 0);
                }
                console.log(results[0]);
                res.json(results[0]);
              }
            );
          });
        }
      } catch (err) {
        res.sendStatus(400);
      }
    }
  );
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

            // If dont exist like in database
            if (doneInsert === true) {
              const sql =
                "INSERT INTO favorite SET account_id=?, apartment_id=?, status=?";

              connection.query(
                sql,
                [idDecode, apartment_id, 1],
                (err, results, fields) => {
                  try {
                    if (err) throw err;
                    res.sendStatus(200);
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
              connection.query(
                changeLike,
                [!results[0].status, apartment_id, idDecode],
                (err, results, fields) => {
                  try {
                    if (err) throw err;
                    res.sendStatus(200);
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
