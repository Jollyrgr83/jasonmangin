const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("index", {"title": "Jason Mangin | Practiced Technology Professional"});
});

module.exports = router;