const mysql = require('mysql')

const DB = mysql.createConnection({
    host: "remotemysql.com",
    user: "kbfkH87Z9A",
    password: "70p32p43UW", 
    database: "kbfkH87Z9A",
    multipleStatements: true 
})

DB.connect(error => {
    if (!error) {
        console.log('Connected To Database')
    } else {
        console.log('No Connection')
    }
})

module.exports = DB