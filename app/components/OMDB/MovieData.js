var React = require('react');

var MovieData = React.createClass({
    propTypes: {
        moviename: React.PropTypes.string.isRequired,
        moviedata: React.PropTypes.object.isRequired
    },
  render: function(){
    console.log('moviedata', this.props.moviedata)
    return (
      <div>
      {this.props.moviedata.Error && <h1>Error: {this.props.moviedata.Error}</h1>}
        {this.props.moviedata.Title && <h1>{this.props.moviedata.Title}</h1>}
        {this.props.moviedata.Director && <li>Directed by: {this.props.moviedata.Director}</li>}
        {this.props.moviedata.Rated && <li>Rated: {this.props.moviedata.Rated}</li>}

        {this.props.moviedata.Plot && <li>Plot: {this.props.moviedata.Plot}</li>}
      </div>
    )
  }
})

module.exports = MovieData;
