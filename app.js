if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const flash = require('express-flash')

const indexRouter = require('./routes/index');
const listsRouter = require('./routes/lists');
const usersRouter = require('./routes/users');

const app = express();
app.use(cors())

require('./passport-config')(passport)
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
app.use(flash());
app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: true,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter);
app.use('/lists', listsRouter);
app.use('/users', usersRouter);



module.exports = app;
