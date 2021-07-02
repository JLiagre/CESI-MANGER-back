const jwt = require('jsonwebtoken');
var databases = require('../../databases/databases');

const restaurantController = {}

restaurantController.createRestaurant = async function (req, res) {
    console.log(req);
    var dbco = new databases();
    try {
        await dbco.createRestaurant(req.body);
        return res.status(200).send()
    } catch (e) {
        return res.status(412).send();
    }
}

restaurantController.getRestaurants = async function (req, res) {
    var dbco = new databases();
    console.log(req.query.id)
    try {
        const list = await dbco.getRestaurants(req.query.id);
        return res.status(200).send(list);
    } catch (e) {
        return res.status(412).send();
    }
}

restaurantController.deleteRestaurant = async function (req, res) {

    var dbco = new databases();
    try {
        console.log(req.query.id)
        await dbco.deleteRestaurant(req.query.id);
        return res.status(200).send();
    } catch (e) {
        return res.status(412).send();
    }
}

restaurantController.editRestaurant = async function (req, res) {

    var dbco = new databases();
    try {
        console.log(req.query.id)
        const list = await dbco.editRestaurant(req.query.id);
        return res.status(200).send(list);
    } catch (e) {
        return res.status(412).send();
    }
}


module.exports = {
    restaurantController,
}
