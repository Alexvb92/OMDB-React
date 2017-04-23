var React = require('react');
var SearchOMDB = require('./SearchOMDB');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
        <div className ="navbar-header col-sm-3">
        <div className="navbar-brand "> OMDB Search </div>
        </div>
          <div className="col-sm-9"  style={{marginTop: 15}}>
            <SearchOMDB />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
