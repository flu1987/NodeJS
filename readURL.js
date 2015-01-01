var http = require('http');

http.get("http://www.sublimetext.com/3", function (res) {
    res.on('data', function(data) {
    	console.log(data.toString());
    });
    res.on('end', function() {
        console.log('Finished !');
    });
}).on('error', function(err) {
    console.log("ERROR: " + err.message);
});