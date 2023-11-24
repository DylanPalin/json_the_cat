const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`Request failed:, ${response.statusCode}`, null);
      return error;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`No breed found for: ${breedName}`, null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };