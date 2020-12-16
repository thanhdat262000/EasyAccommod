const jwt = require('jsonwebtoken');

require('dotenv').config()

module.exports.authUser = async(req, res, next) => {
    if(req.headers['x-access-token'] == null){
        res.status(403);
        return res.send("You need to sign in");
    }
    next();
}

module.exports.authRole = (role) => {
    return async(req, res, next) => {
        jwt.verify( req.headers['x-access-token'], process.env.JWT_KEY, (err, decoded) => {
            if(err) console.log(err)
            else {
                console.log(decoded);
                let roleDecode = decoded.data.privilege;
                console.log(roleDecode);
                if(role !== roleDecode){
                    res.status(401);
                    res.send("Not Allowed");
                }
                else{
                    req.id = decoded.data.id;
                    next();
                }
            }
        })
    }
} 