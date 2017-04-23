var axios = require('axios');

function getuserinfo(moviename){
  return axios.get('http://www.omdbapi.com/?t=' + moviename);
};

var helpers = {
  getOMDBInfo: function(moviename){
    return axios.all([getuserinfo(moviename)])
    .then(function(arr){
        return {
    moviedata: arr[0].data
  }
});

  }
};

module.exports = helpers;
