const sql = require('mysql')

module.exports = {
    // CERATE DATABASE
    create_db: (db_name) => {
        global.conn.query(`CREATE DATABASE ${db_name}`, (err) => {
            if (err) console.log(err.message)
            else return console.log('Databse created')
        })
    },
    // shpw all data in table
    show_all: (table_name) => {
        global.conn.query(`SELECT * FROM ${table_name}`, (err, data) => {
            if (err) console.log(err.message)
            // parse data into simple json format
            else console.log(JSON.stringify(data))
        })
    },
    // show col data 
    show_col: (table_name, field1) => {
        global.conn.query(`SELECT ${field1} FROM ${table_name}`, (err, data) => {
            if (err) console.log(err.message)
            // parse data into simple json format
            else console.log(JSON.stringify(data))
        })
    }

}

