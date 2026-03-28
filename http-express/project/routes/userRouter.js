const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("<h1>User Login Page</h1>");
});

router.get("/profile", (req, res) => {
    res.send("<h1>User Profile Page</h1>");
});

module.exports = router;