const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8080;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const config = require("../config")
module.exports.bcrypt = bcrypt;

app.use(cors());
app.use(bodyParser.json());
console.log(config.dbLink)
const dbRoute = config.dbLink;
mongoose.connect(dbRoute, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const questionsRouter = require('./routes/questions');


app.use('/users', usersRouter);
app.use('/questions', questionsRouter);

app.listen(process.env.PORT || 5000)

