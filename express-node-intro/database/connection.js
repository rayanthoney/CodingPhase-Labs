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
        // RUNNING MIGRATION OF TABLES
        DB.query('SELECT 1 FROM posts LIMIT 1', (error, results) => {
            if(error) {
                // CREATE TABLE
                console.log('Creating Table posts')
                DB.query('CREATE TABLE posts(id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(60) NOT NULL, description MEDIUMTEXT NOT NULL, image_url MEDIUMTEXT NOT NULL)', (error, results) => {
                    if(error) {
                        console.log('ERROR WITH CREATING TABLE')
                        console.log(error)
                    } else {
                        console.log('CREATED TABLE')
                    }
                })
            } else {
                console.log('Table posts Already Exist')
            }
        })
    } else {
        console.log('No Connection')
    }
})

module.exports = DB