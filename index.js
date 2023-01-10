var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const https = require('https');
const fs = require('fs');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/missions')

// readFileSync function must use __dirname get current directory
// require use ./ refer to current directory.

const options = {
};

var app = express()

 // Create HTTPs server.

//var httpsServer = https.createServer(options, app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json({ extended: false }));


app.use('/', indexRouter);
app.use('/user', userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

var PORT = process.env.PORT || 8000
var HTTPSPORT = process.env.HTTPSPORT || 443

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
//httpsServer.listen(HTTPSPORT, () => console.log(`HTTPS Server is running in port ${HTTPSPORT}`));

module.exports = app;