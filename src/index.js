const sql = require('mysql')
const { create_db } = require('./sql.orm')
const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})


connection.connect((err) => {
    if (err) throw err.message
    console.log('Connected !')

    connection.query("CREATE DATABASE demo1", (err, res) => {
        if (err) throw err.message;
        console.log("Database created.")
    })
})

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandle Rejection')
}).on('uncaughtException', err => {
    console.error(err, 'Uncaught Execption thrown')
    process.exit(1)
})