const express = require("express");

let hemmelig = express.Router();
hemmelig.use(authenticator);

hemmelig.get("/", (req, res,next){

});

module.exports = hemmelig