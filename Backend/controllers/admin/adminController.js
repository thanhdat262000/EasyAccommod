const connection = require("../../db");

module.exports.index = async (req, res) => {
    res.send("Index admin" + req.id);
}

module.exports.getAllOwners = async (req, res) => {
    const sql = `SELECT account.account_id, account.email, CONCAT(account.first_name, " " ,account.last_name) AS name, account.phone, account.address, account.idCard
    FROM account 
    WHERE account.privilege = 'owner'`;
    connection.query(sql, async(err, results, fields) => {
        if(err) res.sendStatus(400);
        res.json(results);
    })
}

module.exports.getAllApartmentPost = async (req, res) => {
    const sql = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN account ON account.account_id = apartment.account_id
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id`;
    connection.query(sql, async(err, results, fields) => {
        if(err) res.sendStatus(400);
        res.json(results);
    })
}

module.exports.postApartment = async(req, res) => {
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
        typeDate
    } = req.body;
    const postTime = Date.now();
    const status = "Đã được duyệt";
    let expiration;
    if(typeDate === "Tuần"){
        expiration = (postTime) + numberDate*(TIME.WEEK);
    }
    else if(typeDate === "Tháng"){
        expiration = (postTime) + numberDate*(TIME.MONTH);
    }
    else if(typeDate === "Năm"){
        expiration = (postTime) + numberDate*(TIME.YEAR);
    }
    expiration = new Date(expiration)
    console.log(expiration, typeof(expiration))

    let city_id, district_id;

    const sqlApartment = `INSERT INTO apartment 
        SET account_id = ?, city_id = ?, district_id = ?, expiration = ?, status = ?, apartment_type = ?, postTime = ?`;
    const sqlCity = "SELECT city.city_id FROM city WHERE city.name = ?";
    const sqlDistrict = "SELECT district.district_id FROM district WHERE district.name = ?";
    const sqlApartmentDetail = `INSERT INTO apartment_detail 
        SET apartment_id = ?, price = ?, square = ?, roomDescription = ?, addressDescription = ?, hasElevator = ?, withOwner = ?, 
        hasAirConditioning = ?, kitchen_type = ?, bathroom_type = ?, smoker = ?, waterAndElecticity_bill_type = ?`

    try{
        connection.query( sqlCity, [city], async(err, results, fields) => {
            // console.log(results[0].city_id)
            if(err) throw err; 
            city_id = results[0].city_id;
            
            connection.query(sqlDistrict, [district], async(err, results, fields) => {
                if(err) throw err;
    
                district_id = results[0].district_id;
    
                connection.query(sqlApartment, [req.id, city_id, district_id, expiration, status, apartment_type, new Date(Date.now())], async(err, results, fields) => {
                    if(err) throw err;

                    const apartment_id = results.insertId;

                    connection.query(
                        sqlApartmentDetail, 
                        [apartment_id, price, square, roomDescription, addressDescription, hasElevator, withOwner, hasAirConditioning, kitchen_type, bathroom_type, smoker, waterAndElecticity_bill_type],
                        async(err, results, fields) => {
                            if(err) throw err;

                            res.sendStatus(200);
                        }            
                    )
                }) 
            })
        });
    }catch(err){
        res.send(400);
    }
}

module.exports.putEditApartment = async(req, res) => {
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
        typeDate
    } = req.body;
    const postTime = Date.now();
    const status = "Đã được duyệt";
    let expiration;
    if(typeDate === "Tuần"){
        expiration = (postTime) + numberDate*(TIME.WEEK);
    }
    else if(typeDate === "Tháng"){
        expiration = (postTime) + numberDate*(TIME.MONTH);
    }
    else if(typeDate === "Năm"){
        expiration = (postTime) + numberDate*(TIME.YEAR);
    }
    let city_id, district_id;

    const sqlApartment = `UPDATE apartment 
        SET account_id = ?, city_id = ?, district_id = ?, expiration = ?, status = ?, apartment_type = ?, postTime = ?
        WHERE apartment.apartment_id = ?`;
    const sqlCity = "SELECT city.city_id FROM city WHERE city.name = ?";
    const sqlDistrict = "SELECT district.district_id FROM district WHERE district.name = ?";
    const sqlApartmentDetail = `UPDATE apartment_detail 
        SET price = ?, square = ?, roomDescription = ?, addressDescription = ?, hasElevator = ?, withOwner = ?, 
        hasAirConditioning = ?, kitchen_type = ?, bathroom_type = ?, smoker = ?, waterAndElecticity_bill_type = ?
        WHERE apartment_id = ?`

    try{
        connection.query( sqlCity, [city], async(err, results, fields) => {
            // console.log(results[0].city_id)
            if(err) throw err; 
            city_id = results[0].city_id;
            
            connection.query(sqlDistrict, [district], async(err, results, fields) => {
                if(err) throw err;
    
                district_id = results[0].district_id;
    
                connection.query(sqlApartment, [req.id, city_id, district_id, expiration, status, apartment_type, new Date(Date.now()), req.params.id], async(err, results, fields) => {
                    if(err) throw err;

                    connection.query(
                        sqlApartmentDetail, 
                        [ price, square, roomDescription, addressDescription, hasElevator, withOwner, hasAirConditioning, kitchen_type, bathroom_type, smoker, waterAndElecticity_bill_type, req.params.id],
                        async(err, results, fields) => {
                            if(err) throw err;

                            res.sendStatus(200);
                        }            
                    )
                }) 
            })
        });
    }catch(err){
        res.send(400);
    }
}

module.exports.getAllApproved = async (req, res) => {
    const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Đã được duyệt' AND apartment.account_id = ?`;

    connection.query(sql,[req.id], (err, results, fields) => {
        if(err) return res.sendStatus(404);
        res.json(results);
    })
}

module.exports.getAllDisapproved = async (req, res) => {
    const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Không được duyệt' AND apartment.account_id = ?`;

    connection.query(sql,[req.id], (err, results, fields) => {
        if(err) return res.sendStatus(404);
        res.json(results);
    })
}

module.exports.getAllRented = async (req, res) => {
    const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Đã thuê' AND apartment.account_id = ?`;

    connection.query(sql,[req.id], (err, results, fields) => {
        if(err) return res.sendStatus(404);
        res.json(results);
    })
}

module.exports.getAllExpired = async (req, res) => {
    const sql = `SELECT apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, city.name AS city, district.name AS district
    FROM apartment
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
    JOIN city ON city.city_id = apartment.city_id
    JOIN district ON district.city_id = city.city_id
    WHERE apartment.status = 'Đã hết hạn' AND apartment.account_id = ?`;

    connection.query(sql,[req.id], (err, results, fields) => {
        if(err) return res.sendStatus(404);
        res.json(results);
    })
}

module.exports.putChangeRented = async(req, res) => {
    const sql = `UPDATE apartment 
        SET apartment.status = "Đã thuê" 
        WHERE apartment.apartment_id = ? AND apartment.account_id = ?`
    try{
        connection.query(sql, [req.params.id, req.id], async(err, results, fields) => {
            if(err) throw err;
            res.sendStatus(200);
        })
    }catch(err){
        res.sendStatus(400);
    }
}

module.exports.putChangeDisapproved = async(req, res) => {
    const sql = `UPDATE apartment 
        SET apartment.status = "Không được duyệt" 
        WHERE apartment.apartment_id = ? `
    try{
        connection.query(sql, [req.params.id], async(err, results, fields) => {
            if(err) throw err;
            res.sendStatus(200);
        })
    }catch(err){
        res.sendStatus(400);
    }
}

module.exports.putChangeCancel = async(req, res) => {
    const sql = `UPDATE apartment 
        SET apartment.status = "Đã hết hạn" 
        WHERE apartment.apartment_id = ? AND apartment.account_id = ?`
    try{
        connection.query(sql, [req.params.id, req.id], async(err, results, fields) => {
            if(err) throw err;
            res.sendStatus(200);
        })
    }catch(err){
        res.sendStatus(400);
    }
}

module.exports.getStatistics = async(req, res) => {
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
    const mostView = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, apartment_detail.view, apartment_detail.favorite, apartment.postTime
    FROM apartment
    JOIN account ON account.account_id = apartment.account_id
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
   	ORDER BY apartment_detail.view DESC LIMIT 1`;
    const mostFavorite = `SELECT CONCAT(account.first_name, " ", account.last_name) AS owner,apartment.account_id, apartment_detail.price, apartment_detail.square, apartment.apartment_type, apartment.status, apartment.expiration, apartment_detail.square, apartment_detail.price, apartment_detail.view, apartment_detail.favorite, apartment.postTime
    FROM apartment
    JOIN account ON account.account_id = apartment.account_id
    JOIN apartment_detail ON apartment.apartment_id = apartment_detail.apartment_id
   	ORDER BY apartment_detail.favorite DESC LIMIT 1`;
    const mostPostime = `SELECT COUNT(*) AS post, postTime, YEAR(postTime) AS year, MONTH(postTime) AS month
    FROM apartment
   	GROUP BY YEAR(postTime) AND MONTH(postTime)
    ORDER BY COUNT(*) DESC LIMIT 1`;
    let data = {};
    try{
        connection.query(mostView, async(err, results, fields) => {
            if(err) throw err;
            data.mostView = results[0];

            connection.query(mostFavorite, async(err, results, fields) => {
                if(err) throw err;
                data.mostFavorite = results[0];

                connection.query(mostPostime, async(err, results, fields) => {
                    data.mostPostime = results[0];
                    res.json(data);
                })
            })
        })
    }catch(err){
        res.sendStatus(400);
    }
}

module.exports.putChangeApproved = async(req, res) => {
    const {
        account_id
    } = req.body;
    const sql = `UPDATE account SET status = "Đã duyệt" WHERE account_id = ?`;
    try{
        connection.query(sql, [account_id], (err, results, fields) => {
            if(err) throw err;
            res.sendStatus(200);
        })
    }catch(err){
        res.sendStatus(400);
    }
}

module.exports.getOwnersPending = async(req, res) => {
    const sql = `SELECT account.account_id, account.email, CONCAT(account.first_name, " ", account.last_name) AS name, account.phone, account.idCard 
    FROM account 
    WHERE privilege = "owner" AND status = "Chưa duyệt"`;
    try{
        connection.query(sql, (err, results, fields) => {
            if(err) throw err;
            res.json(results);
        })
    }catch(err){
        res.sendStatus(400);
    }
}

module.exports.getOwnersApproved = async(req, res) => {
    const sql = `SELECT account.account_id, account.email, CONCAT(account.first_name, " ", account.last_name) AS name, account.phone, account.idCard 
    FROM account 
    WHERE privilege = "owner" AND status = "Đã duyệt"`;
    try{
        connection.query(sql, (err, results, fields) => {
            if(err) throw err;
            res.json(results);
        })
    }catch(err){
        res.sendStatus(400);
    } 
}
