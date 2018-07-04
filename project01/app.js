
/*function sayHello(name) {
    console.log('Hello ' + name);
}*/

//sayHello('Rafal');

//console.log(module);

//const log = require ('./logger.js')

//log('Chuynia');

// ----------

/*const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj.name);*/

// ----------

/*const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);*/

// ----------

/*const fs = require('fs');

//const files = fs.readdirSync('./');

const files = fs.readdir('./', function(err, files){
    if (err) console.log(err);
    else console.log(files);
  });

*/

// ----------

const EventEmitter = require('events');

const emitter = new EventEmitter();
