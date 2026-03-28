const express = require("express");
const router = express.Router();

router.get("/item", (req, res) => {
    res.send("<h1>Cart Item Page</h1>");
});

router.get("/list", (req, res) => {
    res.send("<h1>Cart List Page</h1>");
});

module.exports = router;