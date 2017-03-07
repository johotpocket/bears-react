import React from 'react';
import $ from 'jquery';
import BearsList from './BearsList';


//Ajax pulls our data from the server. I think. Ajax is weird.
var ViewContainer = React.createClass({
  getInitialState: function(){
  return {
    bears: null
  }
},
loadBearsFromServer: function() {
  $.ajax({
    url: "/api/bears",
    method: "GET"
  }).done(function(data){
    this.setState({ bears: data })  // --> We can now use 'this' inside of our done
    //console.log(data, "SUCCESSFULLY UPDATING STATE")
  }.bind(this))  // ---> because we are binding 'this' here.
},
componentWillMount: function(){
  this.loadBearsFromServer();
},
//our delete function
deleteBear: function(id) {
  var self = this;
  $.ajax({
    url: '/api/bears/' + id,
    method: 'DELETE'
  }).done(function(data){
    console.log(data, "SUCCESS DELETING BEAR");
    self.loadBearsFromServer();
  })
},
//our render method
  render: function()
  {
    return (
      <div className="jumbotron">
        <h1> Hello from View Container! </h1>
        { this.state.bears ? <BearsList updateActiveComponent={this.props.updateActiveComponent} bears={this.state.bears} deleteBear={this.deleteBear} /> : null }
      </div>
    )
  }
})

export default ViewContainer;
