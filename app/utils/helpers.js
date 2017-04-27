var axios = require('axios');

function getmovieinfo(moviename){
  return axios.get('https://www.omdbapi.com/?t=' + moviename + '&plot=full');
};

// function getsuggestions(moviename){
//   return axios.get("http://suggestqueries.google.com/complete/search?callback=?",
//                 {
//                   "hl":"en", // Language
//                   "ds":"yt", // Restrict lookup to youtube
//                   "jsonp":"suggestCallBack", // jsonp callback function name
//                   "q":moviename, // query term
//                   "client":"youtube" // force youtube style response, i.e. jsonp
//                 }
//                 )
// };


var helpers = {
  getOMDBInfo: function(moviename){
    return axios.all([getmovieinfo(moviename)])
    .then(function(arr){
        return {
    moviedata: arr[0].data,
    // moviesuggestions: arr[1].data
  }
});

  }
};

module.exports = helpers;

