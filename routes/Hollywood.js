const express = require('express')
const hollywoodapi = require("../Api/Hollywood")

const hollywood = express.Router()
hollywood.route("/hollywood").get(hollywoodapi.apicontroller);

module.exports = hollywood;