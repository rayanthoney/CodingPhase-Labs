const mysql = require('mysql')
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cp-express-basics',
  multipleStatements: true 
})

DB.connect((error) => {
    if(!error) {
        console.log("Connected To Your Database!")
    } else {
        console.log("No Connection To Your Database!")
    }
})

module.exports = DB
