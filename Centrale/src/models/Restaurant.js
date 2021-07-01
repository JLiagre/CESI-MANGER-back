const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,

    },
    address: {
        type: String,

    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    zip: {
        type: Number,
    },
    userID:{
        type: Number,
    },
    opening_days : {
        type: Array
    },
    opening_hours : [{hours: Object }],
    menu: [
        {
            title: String,
            description: String,
            image: String,
            price: String,
        }
    ]
})

const Restaurant = mongoose.model('store', RestaurantSchema);
module.exports = Restaurant;