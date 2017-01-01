var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
  var self = this;

  this.on('add', function(num, num2) {
      console.log(num + num2);
    });

  this.on('min', function(num, num2){
    console.log(num - num2);
  });
};
Calc.prototype.add = function(num, num2) {
  console.log(num + num2);
}

var Calc2 = function() {
  var self = this;

  this.on('mul', function(num, num2) {
    console.log(num*num2);
  });

  this.on('div', function(num, num2) {
    console.log(num /num2);
  });
};
util.inherits(Calc, EventEmitter);
util.inherits(Calc2, Calc);
/*Calc.prototype.add = function(a, b) {

  return a + b;
}
Calc.prototype.min = function(a, b) {
  return a-b;
}
*/
module.exports = Calc2;
module.exports.title = 'calculator';
