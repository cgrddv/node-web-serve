var express = require('express');
var app = require('express')();
var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./private.pem', 'utf8');
var certificate = fs.readFileSync('./file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

app.use(express.static('/home/dpf/ifm-app/www'))

var httpsServer = https.createServer(credentials, app);
var SSLPORT = 9000;

try {
  httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
  });
} catch (e) {
  console.log(e)
}


// Welcome
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('Welcome to Safety Land!');
    }
    else {
        res.status(503).send('No http!');
    }
});

