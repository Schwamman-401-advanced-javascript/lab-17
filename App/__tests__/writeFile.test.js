'use strict';

jest.mock('fs');
const writeFile = require('../modules/writeFile');
const eventHub = require('../modules/eventHub');

describe('writeFile', () => {

  beforeEach(() => {
    jest.spyOn(eventHub, 'emit');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('writes to valid file path and emits saved', async () => {
    let file = 'test file.txt';

    await writeFile(file, 'Testing!');

    expect(eventHub.emit).toHaveBeenCalledWith('save', file);
  });

  it('emits error for bad file', async () => {
    let file = 'bad file.txt';

    try {
      await writeFile(file, 'testing!');
    } catch(error) {
      expect(error);
    }
  });
});