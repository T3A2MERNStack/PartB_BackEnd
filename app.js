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
const MongoStore = require('connect-mongo')(session)
const UserModel = require('./models/user')

const indexRouter = require('./routes/index');
const listsRouter = require('./routes/lists');
const usersRouter = require('./routes/users');

const app = express();

const db = require('./config/keys').MongoId

mongoose.connect(
  db,
  { useNewUrlParser: true,
    useUnifiedTopology: true 
  },
  error => {
    if(error){
      console.log("there was an error")
      throw error
    } else {
      console.log("we are connected")
    }
  }
)
  
//Middleware 
  
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const initializePassport = require('./passport-config')
initializePassport(passport)

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore(
    {mongooseConnection: mongoose.connection,
    collection: 'sessions'}
  ),
  cookie: {
      maxAge: 2*2*2*2
  }
  })
)

app.use(cookieParser('secret'))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter);
app.use('/lists', listsRouter);
app.use('/users', usersRouter);



module.exports = app;
