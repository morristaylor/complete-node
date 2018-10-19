const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    // reset Dark Sky key 2018-10-19
    url: `https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}

module.exports = {
  getWeather
};
