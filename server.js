'use strict'

var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/public_html'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/',function(req,res){
	res.sendFile('index.html',{'root':__dirname + '/public_html'});
})

app.listen('3000',function(){
	console.log('Server running at http://localhost:3000 !!')
})
