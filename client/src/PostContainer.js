import React from 'react';
import PostBearForm from './PostBearForm';
import $ from 'jquery';

//getInitialState paves the way for us to pass in our actual data
var PostContainer = React.createClass({

  getInitialState: function() {
  return {
    name: null,
    species: null,
    color: null
  }
},

updateName: function(name) {
  this.setState({ name: name })
},
updateSpecies: function(species) {
  this.setState({ species: species })
},
updateColor: function(color) {
  this.setState({ color: color })
},

handleSubmit: function(e) {
  e.preventDefault();
  var self = this;
  var data = {
    name: this.state.name,
    color: this.state.color,
    species: this.state.species
  };

  $.ajax({
    url: '/api/bears',
    method: 'POST',
    data: data
  }).done(function(data){
    console.log(data, "SUCCESS CREATING BEAR")
  })
},

  render: function()
  {
    return (
      <div className="jumbotron">
      <PostBearForm updateName={this.updateName}
                    updateSpecies={this.updateSpecies}
                    updateColor={this.updateColor}
                    handleSubmit={this.handleSubmit}
                  />
      </div>
    )
  }
})

export default PostContainer;
