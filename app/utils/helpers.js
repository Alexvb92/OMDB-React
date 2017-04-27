var axios = require('axios');

function getmovieinfo(moviename){
  return axios.get('https://www.omdbapi.com/?t=' + moviename + '&plot=full');
};


var helpers = {
  getOMDBInfo: function(moviename){
    return axios.all([getmovieinfo(moviename)])
    .then(function(arr){
      return {
        moviedata: arr[0].data,
      }
    });
  }
};

module.exports = helpers;

