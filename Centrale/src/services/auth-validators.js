const validator = require('./validator');

const signup = (req, res, next) => {

    const validationRule = {
        "name": "required|string",
        "surname": "required|string",
        "username": "required|string",
        "email": "email",
        "phone": "integer",
        "password": "required|string|min:6",
        "address": "string",
        "city": "string",
        "country": "string",
        "zip": "string",

    }
    validator(req.body, validationRule, {}, (err, status) => {
        console.log("THIS IS BODY!");
        console.log(req.query);
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = {
    signup
}
