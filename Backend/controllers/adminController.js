const connection = require("../db");

module.exports.index = async (req, res) => {
    res.send("Index admin" + req.id);
}