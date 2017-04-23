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
      <div className="titlebox col-md-12">
      {this.props.moviedata.Error && <h1>Error: {this.props.moviedata.Error}</h1>}
        {this.props.moviedata.Title && <h1 >{this.props.moviedata.Title}</h1>}
        {this.props.moviedata.Year && <h1 >({this.props.moviedata.Year})</h1>}
      </div>
      <div>
      {this.props.moviedata.Rated && <li>IMDB Score: {this.props.moviedata.Rated}</li>}
      {this.props.moviedata.Actors && <li>Starring: {this.props.moviedata.Actors}</li>}
      {this.props.moviedata.Genre && <li>Genre: {this.props.moviedata.Genre}</li>}
        {this.props.moviedata.Director && <li>Directed by: {this.props.moviedata.Director}</li>}
        {this.props.moviedata.Rated && <li>Rated: {this.props.moviedata.Rated}</li>}

        {this.props.moviedata.Plot && <li>Plot: {this.props.moviedata.Plot}</li>}
      </div>
      <div className="theposter col-md-6">
      {this.props.moviedata.Poster &&  <img src={this.props.moviedata.Poster} />}
      </div>
      </div>
    )
  }
})

module.exports = MovieData;
