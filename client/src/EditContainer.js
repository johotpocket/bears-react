import React from 'react';
import $ from 'jquery';
import EditForm from './EditBearForm';

//this will be where we change existing bears
var EditContainer = React.createClass({
  getInitialState: function() {
    return {
    name: null,
    species: null,
    color: null,
    }
  },
  updateName: function(name) {
  return this.setState({ name: name })
  },
  updateSpecies: function(species) {
  return this.setState({ species: species })
  },
  updateColor: function(color) {
  return this.setState({ color: color })
 },

  componentWillMount: function(){
    this.loadBearFromServer();
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
    url: `/api/bears/${this.props.id}`,
    method: 'PUT',
    data: data
  }).done(function(data){
    console.log(data, "SUCCESS EDITING BEAR")
  })
},
  loadBearFromServer: function(){
    var self = this;
    $.ajax({
      url: `/api/bears/${this.props.id}`,
      method: 'GET'
    }).done(function(data){
      self.setState({ name: data.name, color: data.color, species: data.species })
    })
  },

  render: function()
  {
    return (
      <div className="jumbotron">
        <h1> Hello from Edit Container! </h1>
        <EditForm name={this.state.name}
                        color={this.state.color}
                        species={this.state.species}
                        updateName={this.updateName}
                        updateSpecies={this.updateSpecies}
                        updateColor={this.updateColor}
                        handleSubmit={this.handleSubmit}
                      />
      </div>
    )
  }
})

export default EditContainer;
