const eventHub = require('../modules/eventHub');
require('../modules/logger');

describe('logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('logs to console on save', () => {
    let savedData = { name: 'Testing' };

    eventHub.emit('save', savedData);

    expect(console.log)
      .toHaveBeenCalledWith('Saved:', savedData);
  });

  it('logs error to console if failing to read or write', () => {
    eventHub.emit('error', 'Failed to write');

    expect(console.log)
      .toHaveBeenCalledWith('Error:', 'Failed to write');
  });
});