/******************************************************************************
 *  @Purpose        : To create a server to connect with front end and get the 
                     request and send response to client
 *  @file           : server.js        
 *  @author         : AnushKumar S K <anushk136@gmail.com>
 *  @since          : 19-03-2019
 ******************************************************************************/
const route = require('../Fundoo-server/routes/routes')
const express = require('express')
const bodyParser = require('body-parser');
/**
 * Configuring the database.
 */
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   
   next();
  });

app.use(bodyParser.urlencoded({ extended: true }))
/**
 * parse application/json
 */
app.use(bodyParser.json());
var expressValidator = require('express-validator')
app.use(expressValidator());
var cors = require('cors')
app.use(cors())
app.use('/', route);
app.get('/', (req, res) => {
    res.json({ "message": "welcome to FundooNotes application. Take notes quickly, organize and keep track of all your notes" });
});
require('dotenv').config()
app.listen(3000, function () {
    console.log("server is connected");
    console.log("Server is listening on port 3000");
})
const dbConfig = require('./config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Sucessfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
module.exports = app;