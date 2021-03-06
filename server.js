const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here
app.use('/api/users', require('./routes/api/users'));
// Auth Middleware, could place in router
app.use(require('./config/auth'));
app.use('/api/drinks', require('./routes/api/drinks'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});