'use strict';

const eventHub = require('./eventHub');
const fs = require('fs');
const { promisify } = require('util');
const fileWriter = promisify(fs.writeFile);

/**
 * Writes text to file
 * @param {*} file - path to the file
 * @param {*} text - text to be written to file
 */
function writeFile(file, text) {
  return fileWriter( file, Buffer.from(text))
    .then(() => {
      eventHub.emit('save', file);
    });
}

module.exports = writeFile;