const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return Hello World response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found'
      });
    })
    .end(done);
});

it('should return a user object', (done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({
      name: 'John',
      age: 40
    });
  })
  .end(done);
})
