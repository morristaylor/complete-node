require('dotenv').config()
const request = require('request');

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard st philadelphia&key=${process.env.API_KEY}`,
  json: true
}, (error, response, body) => {
  console.log(body);
})
