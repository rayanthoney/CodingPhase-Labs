const express = require('express')
const app = express()
const DB = require('../database/connection')
const PORT = 8001

// Import the routes file
const routes = require("./routes.js")

// Setting the routes
app.use("/", routes)

// Static Files Folders
app.use(express.static ("public"))

// Template Engine
app.set("view.engine", "pug")


// Listening on PORT 
app.listen(PORT, () => {
  console.log(`Your Server is runnig on port ${PORT}! 😁 you betta go catcth it! 🏃🏾‍♂️ `)
})