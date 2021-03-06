var React = require('react');


const boxstyler = {
  borderRadius: '1rem',
  border: '1px solid #fec96b',
  padding: '.5rem',
  fontFamily: 'sans-serif',
  fontSize: '1.3rem',
  textAlign: 'center'
};

const posterstyle = {
  textAlign: 'center'
};

const smallerfont = {
  fontSize: '16px',
  fontStyle: 'italic',
  textAlign: 'center'
};

const centeralign = {
  textAlign: 'center'
};

const centeralignmargin = {
  textAlign: 'center',
  marginTop: '15px'
};
const centerbold = {
  textAlign: 'center',
  fontWeight: 'bolder'
};
const plotstyle = {
  fontSize: '18px',
  fontFamily: 'monospace  ',
  marginTop:'15px'
};
var MovieData = React.createClass({
    propTypes: {
        moviename: React.PropTypes.string.isRequired,
        moviedata: React.PropTypes.object.isRequired
    },
  render: function(){
    return (
      <div>
        <div className="errorbox col-md-12" style={centeralign}>
          {this.props.moviedata.Error && <h1> <img src="http://i.imgur.com/qlQfmWP.png" /></h1> }
        </div>
        <div className="errorbox col-md-12" style={centeralign}>
          {this.props.moviedata.Error && <h1>Sorry, we can't seem to find anything called {this.props.moviename}!</h1>}
        </div>
        <div className="theposter col-md-6" style={posterstyle} >
          {this.props.moviedata.Poster &&  <img src={this.props.moviedata.Poster} />}
        </div>
        <div className="textbox col-md-6" >
          {this.props.moviedata.Title && <h1  style={centeralign}>{this.props.moviedata.Title}</h1>}
          {this.props.moviedata.Year && <h2 style={smallerfont}>({this.props.moviedata.Year})</h2>}
          {this.props.moviedata.Rated && <div style={boxstyler} >IMDB Score: {this.props.moviedata.imdbRating}/10</div>}
          {this.props.moviedata.Actors && <div className="well well-sm" style={centeralignmargin}> {this.props.moviedata.Director && <div style={centeralign}>Directed by {this.props.moviedata.Director}</div>}<h2 >Starring:</h2> {this.props.moviedata.Actors}</div>}
          <div >
            {this.props.moviedata.Genre && <div className="col-md-4" style={centeralign}>{this.props.moviedata.Genre}</div>}
            {this.props.moviedata.Runtime && <div className="col-md-4" style={centeralign}>{this.props.moviedata.Runtime}</div>}
            {this.props.moviedata.Rated && <div className="col-md-4" style={centerbold}>{this.props.moviedata.Rated}</div>}
          </div>
        </div>
          <div className="plotbox col-md-6">
            {this.props.moviedata.Plot && <div style={plotstyle}> {this.props.moviedata.Plot}</div>}
          </div>
        </div>
    )
  }
});

module.exports = MovieData;
