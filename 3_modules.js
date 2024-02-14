// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const {john, peter} = require('./4_names');
const sayHi = require('./5_utils');
const data = require('./6_alternative_flavor');
require('./7_mind-grenade');

sayHi('Susan');
sayHi(john);
sayHi(peter);