// npm init
// npm install express
// npm install --save-dev nodemon
//"start": "nodemon server.js"

// DECLARE VARIABLES
const express = require('express')
const app = express()
const PORT = 8500

const routes = require("./routes.js")

// ROUTES
app.use("/", routes);

// STATIC FILES FOLDER
app.use(express.static("public"))

// TEMPLATE ENGINE (USING PUG)
app.set('view engine', 'pug')

 // START SERVER LISTENING ON PORT 8000
app.listen(PORT, () =>
console.log(`Server is running on port! ${PORT} You Betta go and catch it!`)
);
