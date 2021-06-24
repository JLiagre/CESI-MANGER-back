const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const PORT = 40253;
const HOST = "0.0.0.0";
const routes = require('./routes');
var databases = require('../databases/databases');

var db = new databases();
db.connect();
db.getUsers();
db.getUser('Test', 'test');

app.use(morgan('dev'));

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});