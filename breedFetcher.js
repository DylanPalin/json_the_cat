const request = require('request');

let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.error('Request failed:', error);
  }
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});

