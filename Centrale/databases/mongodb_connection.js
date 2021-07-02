const {MongoClient} = require('mongodb');
const restaurant = require('../src/models/Restaurant');
const uri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}/cesiManger?retryWrites=true&w=majority&authSource=admin`;
const mongoose = require('mongoose');

const client = new MongoClient(uri);


module.exports = class Mongodb_connection {

    async listDatabases(client) {
        var databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }

    async connecttomongo(req) {
        console.log(uri);
        console.log("entree");
        console.log(req);
        try {
            await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(req.save().then(() => {
                console.log('Everything went well');
            }).catch((e) => {
                console.log('There was an error', e.message);
            }))
            console.log("Connnection successful to MongoDB");
        } catch (err) {
            console.log(err);
        }
    }

    async createRestaurant(data) {
        console.log("INSIDE MONGO CO CLASS");

        let model = new restaurant(data);
        try {
            return await this.connecttomongo(model)
        } catch (err) {
            console.log(err);
        }
    }

    async getRestaurants(id) {
        try {
            mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        } catch (err) {
            console.log(err);
        }
        const records = await restaurant.find().where('userID').in(id).exec();
        console.log(records)
        return records

        console.log("Connnection successful to MongoDB");

    }

    async deleteRestaurant(id) {
        try {
            mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
            await restaurant.findByIdAndRemove(mongoose.Types.ObjectId(id), {useFindAndModify: false});
        }
    catch (err) {
            console.log(err);
        }
        console.log("ID ICIC")
        console.log(id)
        console.log("Connnection successful to MongoDB");
    }

    async editRestaurant(id) {
        try {
            mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        } catch (err) {
            console.log(err);
        }
        const records = await restaurant.findById(mongoose.Types.ObjectId(id));
        console.log(records)
        return records
        console.log("Connnection successful to MongoDB");
    }

    async createMenu(id, menu) {
        try {
            mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        } catch (err) {
            console.log(err);
        }
        const records = await restaurant.findByIdAndUpdate( { _id: mongoose.Types.ObjectId(id) },  { $push: { "menu": menu  } },{useFindAndModify: false});
        console.log(records)
        const res = await restaurant.findById(mongoose.Types.ObjectId(id));
        return res
        console.log("Connnection successful to MongoDB");
    }

    async getAll()   {
        try {
            mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
        } catch (err) {
            console.log(err);
        }
        const records = await restaurant.find();
        console.log(records)
        return records
        console.log("Connnection successful to MongoDB");
}
}








