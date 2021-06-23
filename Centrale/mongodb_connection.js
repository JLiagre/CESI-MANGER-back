const {MongoClient} = require('mongodb');

const uri = "mongodb://sa:cesimanger1234ABC@localhost/test?retryWrites=true&w=majority&authSource=admin";
const client = new MongoClient(uri);

module.exports = class Mongodb_connection {

    async listDatabases(client) {
        var databasesList = await client.db().admin().listDatabases();
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }

    async connecttomongo() {
        console.log(uri);
        console.log("entree")
        try {
            await client.connect();
            await this.listDatabases(client);
            console.log("result")
        } catch (err) {
            console.log(err);
        } finally {
            await client.close();
        }

    }
}







