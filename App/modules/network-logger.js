'use strict';

const eventHub = require('../modules/eventHub');

const net = require('net');
const client = new net.Socket();

const LOGGER_PORT = process.env.LOGGER_PORT || 3001;
const LOGGER_HOST = process.env.LOGGER_HOST || 'localhost';

client.connect(LOGGER_PORT, LOGGER_HOST, initializeLogger);

client.on('error', () => {
  console.warn('Connection closed!');
});

function initializeLogger() {
  console.log(`Network logger connected to server on ${LOGGER_PORT }`);

  eventHub.on('save', log('save'));
  eventHub.on('error', log('error'));

  function log(eventType) {
    return payload => {
      let data = JSON.stringify({
        eventType, 
        payload,
      });
      client.write(`${data}\r\n`);
    };
  }
}