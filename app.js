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
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const User = require('./models/user')

require('./passport-config')
const indexRouter = require('./routes/index');
const listsRouter = require('./routes/lists');
const usersRouter = require('./routes/users');

const aws = require('aws-sdk');

let s3 = new aws.S3({
  access_key_id: process.env.MONGOID,
  secret_access_key: process.env.SECRET
});

const app = express();

const db = process.env.MONGOID

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
  
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors(
  {
  // people coming from "http://localhost:3000"
  origin: "http://localhost:3000",
  // allow client to send credentials like cookies and headers
  credentials: true
}
))

// app.use(express.static(path.join(__dirname, 'public')));
// app.user((res,req)

app.use(session({
  secret: "password",
  resave: false,
  saveUninitialized: false,
  // new MongoStore needs a connection, we have an existing connection so we re-use that
  store: new MongoStore({mongooseConnection: mongoose.connection})
}))
    
app.use(cookieParser("password"))

app.use(passport.initialize())
app.use(passport.session())

app.use('/users', usersRouter);
app.use('/', indexRouter);
app.use('/lists', listsRouter);



module.exports = app;
