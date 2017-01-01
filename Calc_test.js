var Calc = require('./calc');
var calc = new Calc();

calc.add(10, 20);
calc.emit('min', 10, 20);
calc.emit('mul', 10 , 20);
calc.emit('div', 10 , 20);
