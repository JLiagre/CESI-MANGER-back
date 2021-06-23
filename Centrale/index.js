const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const PORT = 40253;
const HOST = "0.0.0.0"
const API_SERVICE_URL = "https://jsonplaceholder.typicode.com";
var sql = require('./sqlserver_connection');
var mongodb = require('./mongodb_connection');

var sqlinstance = new sql();
var mongoinstance = new mongodb();

sqlinstance.connecttosql();
mongoinstance.connecttomongo();

app.use(morgan('dev'));

app.get('/info', (req, res, next) => {
    res.send('Ceci est un test pour CesiMangerBeta');
});


app.get('/', (req, res, next) => {
    res.send('Ceci est CesiMangerBeta');
});

app.use('', (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.sendStatus(403);
    }
});

app.use('/json_placeholder', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/json_placeholder`]: '',
    },
}));

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});