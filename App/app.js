'use strict';

const eventHub = require('./modules/eventHub');
const getFile = require('./modules/readFile');
const writeFile = require('./modules/writeFile');
const toUpperCase = require('./modules/toUpperCase');
require('./modules/logger');
require('./modules/network-logger');

console.log('App is listening');

/**
 * Alters text in file to all uppercase and saves to same file
 * @param {*} file - file path to alter
 */
const alterFile = async (file) => {
  try {
    let data = await getFile(file);
    let text = toUpperCase(data);
    writeFile(file, text);
  } catch(error) {
    eventHub.emit('error', 'Unable to access or write to file!');
  }
};

let file = process.argv.slice(2).shift() || './test.txt';

setInterval(() => {
  alterFile(file);
}, 1000);
