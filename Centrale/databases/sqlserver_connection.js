const sql = require('mssql')


const sqlConfig = {
    user: process.env.SQLSERVER_USERNAME,
    password: process.env.SQLSERVER_PASSWORD,
    database: process.env.SQLSERVER_DB,
    server: process.env.SQLSERVER_HOSTNAME,
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

    async requestsql(req) {
        console.log(req)
        try {
            let con = await sql.connect(sqlConfig)
            var request = new sql.Request();
            const result = await request.query(req)
            await con.close();
            return result
        } catch (err) {
            return err;
        }
    }

    async getUsers() {
        var req = "SELECT * FROM Users"
        var res = await this.requestsql(req)
        console.dir(res)

    }

    async getUser(username, password) {

        var req = "SELECT * FROM Users WHERE user_name ='"
        req += username
        req += "' AND password = HASHBYTES('SHA1', '"
        req += password
        req += "')"
        var res = await this.requestsql(req)
        console.dir(res)
        return res;

    }

    async createUser(UserDTO) {
        console.log(UserDTO);
        var req = `INSERT INTO Users (user_name, password, name, surname, telephone, email, address, zip, city, country,
                                      status, userRole)
                   VALUES ('${UserDTO.username}', HASHBYTES('SHA1', '${UserDTO.password}'), '${UserDTO.name}',
                           '${UserDTO.surname}',
                           '${UserDTO.telephone || ''}', '${UserDTO.email || ''}', '${UserDTO.address || ''}',
                           '${UserDTO.zip || ''}', '${UserDTO.city || ''}', '${UserDTO.country || ''}', 'NEW', '${UserDTO.userRole}')`
        console.log(req);
        var res = await this.requestsql(req)
        console.dir(res)
        return res;
    }

    async deleteUser(id) {
        var req = `DELETE
                   FROM Users
                   WHERE ID = ${id}`
        console.log(req);
        var res = await this.requestsql(req)
        console.dir(res)
        return res;
    }

    async disableUser(id) {
        console.log("OOOOOOOOOOOOOOOOOOOOOOOOOH");
        var req = `UPDATE Users
                   SET status = 'disabled'
                   WHERE ID = ${id}`
        console.log(req);
        var res = await this.requestsql(req)
        console.dir(res)
        return res;
    }

    async testsql() {
        var req = "SELECT name FROM master.sys.databases"
        var res = await this.requestsql(req)
        console.dir(res)
    }
}



