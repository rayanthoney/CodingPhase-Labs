const express = require("express"),
  router = express.Router();

// GET METHOD ➡ ROUTE PATH
router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug");
});

router.get("/pug", (req, res) => {
  return res.render("../assets/views/testing.pug", {
    username: "codingphase",
    fname: "RayAnthoney",
    lname: "Marvilous",
    loggedIn: "false",
    friends: ['Jane', "Johnny", "Billy", "Cindy"]
  });
});

module.exports = router;
