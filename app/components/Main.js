var React = require('react');
var SearchOMDB = require('./SearchOMDB');

const navstyler = {
  backgroundColor: '#fec96b',
  opacity: .8
}

const logostyler = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  fontSize: '24px',
  color: '#ffffff',
  marginTop: '15px'
}


var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <row>
          <nav className="navbar navbar-default col-md-10 col-md-offset-1" role="navigation" style={navstyler}>
            <div className=" col-md-4 " style={logostyler} > OMDB Search </div>
            <div className ="navbar-header" ></div>
            <div className="col-md-8"  style={{marginTop: 15}}>
              <SearchOMDB />
            </div>
          </nav>
        </row>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
