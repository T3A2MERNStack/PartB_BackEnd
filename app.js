var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')

var indexRouter = require('./routes/index');
var listsRouter = require('./routes/lists');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())
const db = require('./config/keys').MongoId

mongoose.connect(
    db,
    { useNewUrlParser: true,
    useUnifiedTopology: true },
    error => {
      if(error){
        console.log("there was an error")
        throw error
      } else {
        console.log("we are connected")
      }
    }
)
  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/lists', listsRouter);
app.use('/users', usersRouter);

module.exports = app;
