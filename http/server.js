var express = require('express');
var app = require('express')();
var http = require('http');


app.use(express.static('/home/dpf/ifm-web/dist'))
app.use(express.static('./static'))
app.set('host','127.0.0.1');

http.createServer(app).listen(8888);

