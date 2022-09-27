const express = require('express')
router = express.Router()


router.get('/', (req, res) => {
    res.send('<h1>Welcome RayAnthoney!</h1>')
  })
  
  router.get("/about", function(req, res) {
    console.log("Arrived at the about page. 👍🏾")
    return res.send("<h1>About Page</h1>")
  })
  
  router.get("/about.txt", function(req, res) {
    console.log("Arrived at the about page. 👍🏾")
    return res.send("<h1>About Page.txt</h1>")
  })
  
  router.get("/user/:username/:state", function(req, res) {
    console.log(req.params)
    const user = req.params;
    const query = req.query;
    return res.send(`
    <h1>User: ${user.username}</h1>
    <h1>State: ${user.state}</h1>
    <h1>Low: ${query.low}</h1>
    <h1>High: ${query.high}</h1>
    <h1>Car: ${req.query.car}</h1>
    `)
    // Return res.json(req.params)
  })