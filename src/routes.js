const routes = require('express').Router();



routes.get("/" (req, res) => {
    return res.send("hellow world");
});

module.exports = routes;