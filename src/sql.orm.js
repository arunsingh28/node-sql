const sql = require('mysql')

module.exports = {
    // CERATE DATABASE
    create_db: (db_name) => {
        global.conn.query(`CREATE DATABASE ${db_name}`, (err) => {
            if (err) console.log(err.message)
            else return 'Databse created'
        })
    },
    // SHOW ALL DATA IN TABLE
    show_all: (table_name) => {
        global.conn.query(`SELECT * FROM ${table_name}`, (err, data) => {
            if (err) console.log(err.message)
            // parse data into simple json format
            else console.log(data)
        })
    },
    // SHOW COL DATA 
    show_col: (table_name, field1) => {
        global.conn.query(`SELECT ${field1} FROM ${table_name}`, (err, data, f) => {
            if (err) console.log(err.message)
            // parse data into simple json format
            else console.log(JSON.stringify(data))
        })
    },

    // FIND DATA WITH WHERE CLAUSE
    findById: (table_name, id, value) => {
        global.conn.query(`SELECT * FROM ${table_name} WHERE ${id} = '${value}'`, (err, data) => {
            if (err) console.log(err.message)
            else console.log(data); 
        })
    }
}

