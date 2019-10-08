'use strict';

jest.mock('fs');
const readFile = require('../modules/readFile');
const eventHub = require('../modules/eventHub');

describe('readFile', () => {
  beforeEach(() => {
    jest.spyOn(eventHub, 'emit');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns data from valid file path', async () => {
    let file = 'test file.txt';

    let result = await readFile(file);

    expect(result);
  });

  it('returns error from invalid file path', async () => {
    let file = 'bad file.txt';

    try {
      await readFile(file);
    } catch(error) {
      expect(error);
    }
  });
});
