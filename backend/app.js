const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
//Importation des routes
const userRoutes = require('./routes/user');
const cors = require('cors');


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/auth', userRoutes);
const db = require("./models")
db.sequelize.sync().then(()=> console.log('sync.complet'))




module.exports = app;