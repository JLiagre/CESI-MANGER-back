const connection = require('../../databases/databases')
const user = {}

user.list = async function () {
    return await connection.db.collection('users').find({}).toArray()
}

module.exports = user