const sql = require('mysql')

module.exports = {
    // CERATE DATABASE
    create_db: (db_name) => {
        global.conn.query(`CREATE DATABASE ${db_name}`, (err, result) => {
            if (err) console.log(err.message)
            else return console.log('Databse created')
        })

    },

}

