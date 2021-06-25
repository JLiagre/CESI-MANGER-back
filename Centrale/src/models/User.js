const connection = require('../../databases/databases')
const user = {}

user.list = async function () {
    return await connection.db.collection('users').find({}).toArray()
}

user.findOne = async function(username, password) {
    var dbco = new connection();
    return await dbco.getUser(username, password);
}
module.exports = user