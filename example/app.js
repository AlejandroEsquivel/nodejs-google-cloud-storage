var express = require('express'),
	app  	= express(),
	
	CloudStorage = require("../src/cloudStorage")();

app.engine('ejs', require('ejs').renderFile);

app.get("/", function(req,res,next) {
	
	var fields = CloudStorage.uploadRequest("example.txt", "key"+Date.now());
	
	res.render(__dirname + "/form.ejs", {fields: fields});
	
});

app.listen(process.env.PORT || 3001);