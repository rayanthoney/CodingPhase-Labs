// npm init
// npm install express
// npm install --save-dev nodemon
//"start": "nodemon server.js"

// DECLARE VARIABLES
const express = require('express')
const app = express()
const PORT = 8500

// GET METHOD
app.get('/', (req, res) => {
    res.send('<h2>Welcome to RayAnthoney and Node.JS Introduction from Codingphase Labs!</h2>')
  })
  
 // START SERVER
app.listen(PORT, () =>
console.log(`Server is running on port! ${PORT} You Betta go and catch it!`)
);
