const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const PORT = 40253;
const HOST = "0.0.0.0";
const routes = require('./routes');
const cookieParser = require('cookie-parser');
var databases = require('../databases/databases');

var db = new databases();
db.connect();
db.getUsers();
db.getUser('Test', 'test');

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/', routes)

app.use(morgan('dev'));


app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
