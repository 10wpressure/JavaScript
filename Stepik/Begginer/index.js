const { readFile, readFileSync } = require('fs');

const txt = readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt)
});
console.log(txt)
console.log('do this ASAP')