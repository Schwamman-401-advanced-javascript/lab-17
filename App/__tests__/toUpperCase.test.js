'use strict';
const toUpperCase = require('../modules/toUpperCase');

describe('toUpperCase()', () => {
  it('changes all lowercase to uppercase letters', () => {
    let string = 'lowercase letters';
    let result = toUpperCase(string);

    expect(result).not.toEqual(string);
    expect(result).toEqual(string.toUpperCase());
  });
});

