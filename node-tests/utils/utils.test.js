const expect = require('expect');

const utils = require('./utils.js');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should async add one numbers', (done) => {
    utils.asyncSquare(3, (sq) => {
      expect(sq).toBe(9).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
  });
});

it('should set firstName and lastName', () => {
  var user = {location: 'Portland', age: 25};
  var res = utils.setName(user, 'John Smith');

  expect(res).toInclude({
    firstName: 'John',
    lastName: 'Smith'
  });
});
