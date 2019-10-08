'use strict';

const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

/**
 * Reads file and returns file data
 * @param {*} file - Path to file
 */
async function getFile(file) {
  let data = await readFile(file);
  return data;
}

module.exports = getFile;