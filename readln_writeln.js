/**
 * Created by feifeilu on 12/29/14.
 */
var fs = require('fs');
var readline = require('readline');


var path='/Users/feifeilu/Desktop/hello.txt';
var path2='/Users/feifeilu/Desktop/hello2.txt';  // will create a new file if not exist
var readStream = fs.createReadStream(path);
var writeStream = fs.createWriteStream(path2);
var rl=readline.createInterface(readStream,writeStream);
var num=0;

readStream.on('close', function() {
    console.log('readstream closed');
});

writeStream.on('close', function() {
    console.log('writestream closed');
});

rl.on('line', function(line){
    if(line[0]=='f'){
        fs.appendFile(path2,line + "\n");
        console.log('Line '+(++num) + ' written: ' + line);
    }
});

rl.on('close', function() {
    readStream.close();   // actually it will close automatically when readline close
    writeStream.close();
    console.log("Read and write finished, readline closed.");
});