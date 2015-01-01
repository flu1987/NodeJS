// Import events and util modules;
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Ticker = function() {
    var self = this;
    this.slowMethod = function() {
        setInterval(function(){
            self.emit('slowTick');
        },1000);
    }
    this.fastMethod = function() {
        setInterval(function(){
            self.emit('fastTick');
        },300);
    }
};

util.inherits(Ticker,EventEmitter);

var ticker = new Ticker();
ticker.on('slowTick', function() {
    console.log('So slow');
});
ticker.on('fastTick', function() {
    console.log('Too fast');
});

ticker.fastMethod();
ticker.slowMethod();