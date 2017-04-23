var React = require('react');
var Router = require('react-router');

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
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" required="required" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search OMDB</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchOMDB;
