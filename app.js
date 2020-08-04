const path = require('path');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const express = require('express');

const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const messagesRouter = require('./routes/messages');

const app = express();

// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/messages', messagesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
