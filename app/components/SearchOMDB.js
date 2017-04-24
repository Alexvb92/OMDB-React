var React = require('react');
var Router = require('react-router');

const btnstyler = {
  backgroundColor: '#777777'
}

var SearchOMDB = React.createClass({
  mixins: [Router.History],
  getRef: function(ref){
    this.movienameRef = ref;
  },
  handleSubmit: function(){
    var moviename = this.movienameRef.value;
    this.movienameRef.value = '';
    this.history.pushState(null, "movie/" + moviename)
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-md-7">
            <input type="text" className="form-control" required="required" ref={this.getRef} />
          </div>
          <div className="form-group col-md-5">
            <button type="submit" className="btn btn-block btn-primary" style={btnstyler}>Search OMDB</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchOMDB;
