var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <h2 className="text-center">
        Enter a movie name to start searching!
        <img src="http://i.imgur.com/4aVDvhN.png" />
      </h2>
    )
  }
});

module.exports = Home;
