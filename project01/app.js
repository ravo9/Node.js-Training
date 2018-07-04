
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

/*const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();


// Register a listener
logger.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});


logger.log('My message 01');*/

// ----------

const http = require('http');

const server = http.createServer( (req, res) => {

    if (req.url === '/') {
        res.write("Hello world");
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});

/*// Setting listener
server.on('connection', (socket) => {
    console.log('New connection...');
})*/

// Listen on port 3000
server.listen(3000);
console.log('Listening on port 3000');