const connection = require("../db");

module.exports.authSignin = async (req, res, next) => {
  const { email } = req.body;
  const sql = `SELECT * FROM account WHERE email = ?`;
  try {
    connection.query(sql, [email], (err, results, fields) => {
      if (err) throw err;
      if (results.length === 0) next();
      else if ((results[0].status = "Đã duyệt")) next();
      else res.status(401);
    });
  } catch (err) {
    res.sendStatus(400);
  }
};
