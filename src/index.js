const sql = require('mysql')
const sqlQuery = require('./sql.orm')
const connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'demo1'
})


connection.connect(async (err) => {
    if (err) throw err.message
    console.log('DB Connected !')

    global.conn = connection
    //  CREATE TABLE
    // var q = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // connection.query(q, (err, res) => {
    //     if (err) console.log(console.message)
    //     else console.log('Table created');
    // })

    // ALTER TABLE
    // var q = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // connection.query(q, (err, res) => {
    //     if (err) console.log(console.message)
    //     else console.log('Table ALTER');
    // })

    // INSERT INTO TABLE
    // var q = "INSERT INTO customers (name, address) VALUES ('Mini Ghunsar', 'Ambala Cantt')";
    // connection.query(q, (err, res) => {
    //     if (err) throw err;
    //     console.log("1 Record inserted")
    // })

    //  INSERT MULTIPLE VALUES INTO TABLE
    // var q = "INSERT INTO customers (name, address) VALUES ?";
    // var values = [
    //     ['demo', 'NCR'],
    //     ['Mukul', 'Aligarh'],
    //     ['Vikas', 'Bewadi'],
    //     ['Appu', 'Bihar'],
    // ]
    // connection.query(q, [values], (err, res) => {
    //     if (err) throw err;
    //     console.log(values.length, "is inserted", res)
    // })

    // SHOW ALL DATA FROM TABLE
    // sqlQuery.show_all('customers')

    // SHOW DATA WITH NAME OR ADDRESS
    // sqlQuery.show_col('customers', 'name')

    // SHOW DATA FROM ID

    // sqlQuery.findById('customers', 'name', 'mini ghunsar')
    // console.log('Name:', await arun)


    // FIND WITH LIKE
    var q = "SELECT * FROM customers WHERE address LIKE 'a%'";
    connection.query(q, (err, res) => {
        if (err) throw err;
        console.log(res)
    })



})

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandle Rejection')
}).on('uncaughtException', err => {
    console.error(err, 'Uncaught Execption thrown')
    process.exit(1)
})
