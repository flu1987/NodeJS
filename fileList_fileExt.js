var fs = require('fs');
var path = require('path');

fs.readdir('/Users/feifeilu/Desktop', function(err, list) {
    if(err) {
    	console.log(err.message);
    	return;
    }
    list.forEach(function (file) {
    	if(path.extname(file) === '.' + process.argv[2])
    		console.log(file);
    })
});

