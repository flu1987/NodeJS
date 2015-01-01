// Import events and util modules;
var EventEmitter = require('events').EventEmitter;
var util = require('util');

// create custom object
var myObj = function() {
	EventEmitter.call(this);
    // add methods
    this.method1 = function() {
    	console.log("Method 1 called");
    	// define event name and data pass to listener
    	var data = "Feifei";
        this.emit('event1', data);
    }

    this.method2 = function() {
    	console.log("Method 2 called");
    	this.emit('event2');
    }
}

// Inherit to EventEmitter
util.inherits(myObj, EventEmitter);

// Instantiate custom object and add listener
var x = new myObj();
x.on('event1', function(data) {
	console.log(data + " is a Genius !!!");
});
x.on('event2', function(){
	console.log("Sure");
})

// Fire !!!
x.method1();
x.method2();

