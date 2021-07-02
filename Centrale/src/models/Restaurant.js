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
    opening_hours : [{type: String }],
    menu: [
        {
            name: String,
            description: String,
            prix: String,
            status: String,
        }
    ]
})

const Restaurant = mongoose.model('store', RestaurantSchema);
module.exports = Restaurant;