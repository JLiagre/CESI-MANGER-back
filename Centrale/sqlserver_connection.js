const sql = require('mssql')
const sqlConfig = {
    user: "sa",
    password: "cesimanger1234ABC",
    database: "cesimanger",
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

module.exports = class Sqlserver_connection {

    async connecttosql() {
        console.log("entree")
        try {
            await sql.connect(sqlConfig)
            const result = await sql.query`select *
                                           from Users `
            console.dir(result)
            console.log("result")
        } catch (err) {
            console.log(err);
        }
    }
}


