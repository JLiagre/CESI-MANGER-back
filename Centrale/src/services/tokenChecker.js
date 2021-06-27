const jwt = require('jsonwebtoken')


module.exports = (req, res) => {

    const token = req.cookies.jwt ? req.cookies.jwt : false

    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
            if (err) {
                return res.status(401).json({"error": true, "message": 'Unauthorized access.'});
            }
            req.decoded = decoded;
            console.log("Bien reçu");
        });
        return  res.status(200)
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            "error": true,
            "message": 'No token provided.'
        });
    }
}
