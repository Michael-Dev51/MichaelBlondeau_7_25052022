const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require("./models")
db.sequelize.sync().then(()=> console.log('sync.complet'))




module.exports = app;