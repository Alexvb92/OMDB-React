var React = require('react');
var Router = require('react-router');
var MovieData = require('./OMDB/MovieData');
var helpers = require('../utils/helpers')

var Movie = React.createClass({
  getInitialState: function(){
    return {
      moviedata: {
        name: 'name of movie'
      }
    }
  },
  componentDidMount: function(){
    helpers.getOMDBInfo(this.props.params.moviename)
      .then(function(data){
        this.setState({
          moviedata: data.moviedata,
          moviesuggestions: data.moviesuggestions
        })
      }.bind(this))
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-12">
          <MovieData moviename={this.props.params.moviename} moviedata={this.state.moviedata} />
        </div>
      </div>
    )
  }
});

module.exports = Movie;
