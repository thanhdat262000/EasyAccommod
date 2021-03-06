const connection = require("../../db");

module.exports.index = async (req, res) => {
  res.send("Index admin" + req.id);
};

module.exports.getAllApprovedOwners = async (req, res) => {
  const sql = `SELECT account.account_id, account.email, CONCAT(account.first_name, " " ,account.last_name) AS name, account.phone, account.address, account.idCard, status
    FROM account 
    WHERE account.privilege = 'owner'AND status="Đã duyệt" `;
  connection.query(sql, async (err, results, fields) => {
    if (err) res.sendStatus(400);
    res.json(results);
  });
};
module.exports.getAllPendingOwners = async (req, res) => {
  const sql = `SELECT account.account_id, account.email, CONCAT(account.first_name, " " ,account.last_name) AS name, account.phone, account.address, account.idCard, status
      FROM account 
      WHERE account.privilege = 'owner'AND status="Chưa duyệt" `;
  connection.query(sql, async (err, results, fields) => {
    if (err) res.sendStatus(400);
    res.json(results);
  });
};
module.exports.getPendingPost = async (req, res) => {
  const sql = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, apartment.apartment_id,apartment.postTime,apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
      FROM apartment
      JOIN account ON account.account_id = apartment.account_id
      JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
      JOIN city ON city.city_id = apartment.city_id
      JOIN district ON district.city_id = city.city_id
      WHERE apartment.status= "Chưa được duyệt"`;
  connection.query(sql, async (err, results, fields) => {
    if (err) res.sendStatus(400);
    res.json(results);
  });
};
module.exports.getApprovedPost = async (req, res) => {
  const sql = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.apartment_id,apartment.postTime,apartment.account_id, apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
      FROM apartment
      JOIN account ON account.account_id = apartment.account_id
      JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
      JOIN city ON city.city_id = apartment.city_id
      JOIN district ON district.city_id = city.city_id
      WHERE apartment.status= "Đã được duyệt"`;
  connection.query(sql, async (err, results, fields) => {
    if (err) res.sendStatus(400);
    res.json(results);
  });
};
module.exports.getDisapprovedPost = async (req, res) => {
  const sql = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, apartment.apartment_id,apartment.postTime,apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
      FROM apartment
      JOIN account ON account.account_id = apartment.account_id
      JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
      JOIN city ON city.city_id = apartment.city_id
      JOIN district ON district.city_id = city.city_id
      WHERE apartment.status= "Không được duyệt"`;
  connection.query(sql, async (err, results, fields) => {
    if (err) res.sendStatus(400);
    console.log(results);
    res.json(results);
  });
};

module.exports.postApartment = async (req, res) => {
  const {
    apartment_type,
    city,
    district,
    town,
    addressDescription,
    price,
    square,
    roomDescription,
    bathroom_type,
    kitchen_type,
    hasElevator,
    withOwner,
    hasAirConditioning,
    smoker,
    waterAndElecticity_bill_type,
    numberDate,
    typeDate,
  } = req.body;
  const postTime = Date.now();
  const status = "Đã được duyệt";
  let expiration;
  if (typeDate === "Tuần") {
    expiration = postTime + numberDate * TIME.WEEK;
  } else if (typeDate === "Tháng") {
    expiration = postTime + numberDate * TIME.MONTH;
  } else if (typeDate === "Năm") {
    expiration = postTime + numberDate * TIME.YEAR;
  }
  expiration = new Date(expiration);
  console.log(expiration, typeof expiration);

  let city_id, district_id;

  const sqlApartment = `INSERT INTO apartment 
        SET account_id = ?, city_id = ?, district_id = ?, expiration = ?, status = ?, apartment_type = ?, postTime = ?`;
  const sqlCity = "SELECT city.city_id FROM city WHERE city.name = ?";
  const sqlDistrict =
    "SELECT district.district_id FROM district WHERE district.name = ?";
  const sqlApartmentDetail = `INSERT INTO apartment_detail 
        SET apartment_id = ?, price = ?, square = ?, roomDescription = ?, addressDescription = ?, hasElevator = ?, withOwner = ?, 
        hasAirConditioning = ?, kitchen_type = ?, bathroom_type = ?, smoker = ?, waterAndElecticity_bill_type = ?`;

  try {
    connection.query(sqlCity, [city], async (err, results, fields) => {
      // console.log(results[0].city_id)
      if (err) throw err;
      city_id = results[0].city_id;

      connection.query(
        sqlDistrict,
        [district],
        async (err, results, fields) => {
          if (err) throw err;

          district_id = results[0].district_id;

          connection.query(
            sqlApartment,
            [
              req.id,
              city_id,
              district_id,
              expiration,
              status,
              apartment_type,
              new Date(Date.now()),
            ],
            async (err, results, fields) => {
              if (err) throw err;

              const apartment_id = results.insertId;

              connection.query(
                sqlApartmentDetail,
                [
                  apartment_id,
                  price,
                  square,
                  roomDescription,
                  addressDescription,
                  hasElevator,
                  withOwner,
                  hasAirConditioning,
                  kitchen_type,
                  bathroom_type,
                  smoker,
                  waterAndElecticity_bill_type,
                ],
                async (err, results, fields) => {
                  if (err) throw err;

                  res.sendStatus(200);
                }
              );
            }
          );
        }
      );
    });
  } catch (err) {
    res.send(400);
  }
};

// module.exports.putEditApartment = async (req, res) => {
//   const {
//     apartment_type,
//     city,
//     district,
//     town,
//     addressDescription,
//     price,
//     square,
//     roomDescription,
//     bathroom_type,
//     kitchen_type,
//     hasElevator,
//     withOwner,
//     hasAirConditioning,
//     smoker,
//     waterAndElecticity_bill_type,
//     numberDate,
//     typeDate,
//   } = req.body;
//   const postTime = Date.now();
//   const status = "Đã được duyệt";
//   let expiration;
//   if (typeDate === "Tuần") {
//     expiration = postTime + numberDate * TIME.WEEK;
//   } else if (typeDate === "Tháng") {
//     expiration = postTime + numberDate * TIME.MONTH;
//   } else if (typeDate === "Năm") {
//     expiration = postTime + numberDate * TIME.YEAR;
//   }
//   let city_id, district_id;

//   const sqlApartment = `UPDATE apartment
//         SET account_id = ?, city_id = ?, district_id = ?, expiration = ?, status = ?, apartment_type = ?, postTime = ?
//         WHERE apartment.apartment_id = ?`;
//   const sqlCity = "SELECT city.city_id FROM city WHERE city.name = ?";
//   const sqlDistrict =
//     "SELECT district.district_id FROM district WHERE district.name = ?";
//   const sqlApartmentDetail = `UPDATE apartment_detail
//         SET price = ?, square = ?, roomDescription = ?, addressDescription = ?, hasElevator = ?, withOwner = ?,
//         hasAirConditioning = ?, kitchen_type = ?, bathroom_type = ?, smoker = ?, waterAndElecticity_bill_type = ?
//         WHERE apartment_id = ?`;

//   try {
//     connection.query(sqlCity, [city], async (err, results, fields) => {
//       // console.log(results[0].city_id)
//       if (err) throw err;
//       city_id = results[0].city_id;

//       connection.query(
//         sqlDistrict,
//         [district],
//         async (err, results, fields) => {
//           if (err) throw err;

//           district_id = results[0].district_id;

//           connection.query(
//             sqlApartment,
//             [
//               req.id,
//               city_id,
//               district_id,
//               expiration,
//               status,
//               apartment_type,
//               new Date(Date.now()),
//               req.params.id,
//             ],
//             async (err, results, fields) => {
//               if (err) throw err;

//               connection.query(
//                 sqlApartmentDetail,
//                 [
//                   price,
//                   square,
//                   roomDescription,
//                   addressDescription,
//                   hasElevator,
//                   withOwner,
//                   hasAirConditioning,
//                   kitchen_type,
//                   bathroom_type,
//                   smoker,
//                   waterAndElecticity_bill_type,
//                   req.params.id,
//                 ],
//                 async (err, results, fields) => {
//                   if (err) throw err;

//                   res.sendStatus(200);
//                 }
//               );
//             }
//           );
//         }
//       );
//     });
//   } catch (err) {
//     res.send(400);
//   }
// };

module.exports.getAllApproved = async (req, res) => {
  const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Đã được duyệt' AND apartment.account_id = ?`;

  connection.query(sql, [req.id], (err, results, fields) => {
    if (err) return res.sendStatus(404);
    res.json(results);
  });
};

module.exports.getAllDisapproved = async (req, res) => {
  const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Không được duyệt' AND apartment.account_id = ?`;

  connection.query(sql, [req.id], (err, results, fields) => {
    if (err) return res.sendStatus(404);
    res.json(results);
  });
};

module.exports.getAllRented = async (req, res) => {
  const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Đã thuê' AND apartment.account_id = ?`;

  connection.query(sql, [req.id], (err, results, fields) => {
    if (err) return res.sendStatus(404);
    res.json(results);
  });
};

module.exports.getAllExpired = async (req, res) => {
  const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Đã hết hạn' AND apartment.account_id = ?`;

  connection.query(sql, [req.id], (err, results, fields) => {
    if (err) return res.sendStatus(404);
    res.json(results);
  });
};

module.exports.putChangeRented = async (req, res) => {
  const sql = `UPDATE apartment 
        SET apartment.status = "Đã thuê" 
        WHERE apartment.apartment_id = ? AND apartment.account_id = ?`;
  try {
    connection.query(
      sql,
      [req.params.id, req.id],
      async (err, results, fields) => {
        if (err) throw err;
        res.sendStatus(200);
      }
    );
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.getAllNotification = async (req, res) => {
  const sql = `SELECT * FROM notification WHERE account_id = ?`;
  connection.query(sql, [req.id], async (err, results, fields) => {
    if (err) res.sendStatus(400);
    else res.json(results);
  });
};

module.exports.putChangeDisapproved = async (req, res) => {
  const apartment_id = req.params.id;
  const message = `Một phong trọ không được duyệt`;
  const sql = `UPDATE apartment 
        SET apartment.status = "Không được duyệt" 
        WHERE apartment.apartment_id = ? `;
  const getAccountId = `SELECT apartment.account_id FROM apartment WHERE apartment_id = ?`;
  const autoPushNotification = `INSERT INTO notification 
        SET notification.account_id = ?, notification.apartment_id = ?, notification.detailDescription = ?`;
  try {
    connection.query(sql, [req.params.id], async (err, results, fields) => {
      if (err) throw err;
      connection.query(getAccountId, [apartment_id], (err, results, fields) => {
        if (err) throw err;
        else {
          connection.query(
            autoPushNotification,
            [results[0]["account_id"], apartment_id, message],
            (err, results, fields) => {
              if (err) throw err;
              res.sendStatus(200);
            }
          );
        }
      });
    });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.putChangeApproved = async (req, res) => {
  const apartment_id = req.params.id;
  const message = "Một phòng trọ đã được duyệt";
  const sql = `UPDATE apartment 
        SET apartment.status = "Đã được duyệt" 
        WHERE apartment.apartment_id = ? `;
  const getAccountId = `SELECT apartment.account_id FROM apartment WHERE apartment_id = ?`;
  const autoPushNotification = `INSERT INTO notification 
        SET notification.account_id = ?, notification.apartment_id = ?, notification.detailDescription = ?, time = ?`;
  try {
    connection.query(sql, [req.params.id], async (err, results, fields) => {
      if (err) throw err;
      connection.query(getAccountId, [apartment_id], (err, results, fields) => {
        if (err) throw err;
        else {
          connection.query(
            autoPushNotification,
            [
              results[0]["account_id"],
              apartment_id,
              message,
              new Date(Date.now()),
            ],
            (err, results, fields) => {
              if (err) throw err;
              res.sendStatus(200);
            }
          );
        }
      });
    });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.putChangeCancel = async (req, res) => {
  const sql = `UPDATE apartment 
        SET apartment.status = "Đã hết hạn" 
        WHERE apartment.apartment_id = ? AND apartment.account_id = ?`;
  try {
    connection.query(
      sql,
      [req.params.id, req.id],
      async (err, results, fields) => {
        if (err) throw err;
        res.sendStatus(200);
      }
    );
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.getStatistics = async (req, res) => {
  // const mostView = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district, apartment_detail.view, apartment_detail.favorite, apartment.postTime
  // FROM apartment
  // JOIN account ON account.account_id = apartment.account_id
  // JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
  // JOIN city ON city.city_id = apartment.city_id
  // JOIN district ON district.city_id = city.city_id
  // ORDER BY apartment_detail.view DESC LIMIT 1 `;
  // const mostFavorite = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district, apartment_detail.view, apartment_detail.favorite, apartment.postTime
  // FROM apartment
  // JOIN account ON account.account_id = apartment.account_id
  // JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
  // JOIN city ON city.city_id = apartment.city_id
  // JOIN district ON district.city_id = city.city_id
  // ORDER BY apartment_detail.favorite DESC LIMIT 1`;
  const mostView = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,city.name as city, district.name as district,apartment.account_id, apartment_detail.price, apartment_detail.square, apartment.apartment_id, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, apartment_detail.view, apartment_detail.favorite, apartment.postTime, "mostView" as type
    FROM apartment
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.district_id = apartment.district_id
    JOIN account ON account.account_id = apartment.account_id
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
   	ORDER BY apartment_detail.view DESC LIMIT 3`;
  const mostFavorite = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, city.name as city, district.name as district ,apartment_detail.price, apartment_detail.square, apartment.apartment_id, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, apartment_detail.view, apartment_detail.favorite, apartment.postTime, "mostLike" as type
    FROM apartment
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.district_id = apartment.district_id
    JOIN account ON account.account_id = apartment.account_id
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
   	ORDER BY apartment_detail.favorite DESC LIMIT 3`;
  const mostPostime = `SELECT COUNT(*) AS post, postTime, YEAR(postTime) AS year, MONTH(postTime) AS month
    FROM apartment
   	GROUP BY YEAR(postTime) AND MONTH(postTime)
    ORDER BY COUNT(*) DESC LIMIT 3`;
  let data = {};
  try {
    connection.query(mostView, async (err, results, fields) => {
      if (err) throw err;
      data.mostView = results;

      connection.query(mostFavorite, async (err, results, fields) => {
        if (err) throw err;
        data.mostFavorite = results;

        connection.query(mostPostime, async (err, results, fields) => {
          data.mostPostime = results;
          res.json(data);
        });
      });
    });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.getAllOwner = async (req, res) => {
  const sql = `SELECT account.email, CONCAT(account.first_name, " ", account.last_name) AS name, account.phone, account.idCard 
  FROM account WHERE account_id = ?`;
  try {
    connection.query(sql, [req.params.id], (err, results, fields) => {
      if (err) throw err;
      else res.json(results[0]);
    });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.putChangeApprovedOwner = async (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE account SET status = "Đã duyệt" WHERE account_id =?`;
  try {
    connection.query(sql, [id], (err, results, fields) => {
      if (err) throw err;
      res.sendStatus(200);
    });
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.put = async (req, res) => {
  const sql = `SELECT account.account_id, account.email, CONCAT(account.first_name, " ", account.last_name) AS name, account.phone, account.idCard 
    FROM account 
    WHERE privilege = "owner" AND status = "Đã duyệt"`;
  try {
    connection.query(sql, (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    });
  } catch (err) {
    res.sendStatus(400);
  }
};
