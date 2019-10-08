'use strict';
const eventHub = require('./eventHub');

eventHub.on('save', log('Saved:'));
eventHub.on('error', log('Error:'));

/**
 * Callback to be used with eventHub, console logs event type and payload from event
 * @param {*} eventType - Type of event being listened for
 */
function log(eventType) {
  return payload => {
    console.log(eventType, payload);
  };
}

