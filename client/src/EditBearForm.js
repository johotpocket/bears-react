import React from 'react';

//the same as PostBearForm, except this comes up when we want to change an existing bear
var EditBearForm = React.createClass({
  render: function()
  {
    return (
      <div className="jumbotron">
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>name of bear</label>
            <input onChange={(event) => this.props.updateName(event.target.value)} value={this.props.name} type="text" className="form-control" id="" placeholder="name"/>
          </div>
          <div className="form-group">
            <label>species</label>
            <input onChange={(event) => this.props.updateSpecies(event.target.value)} value={this.props.species} type="text" className="form-control" id="" placeholder="species"/>
          </div>
          <div className="form-group">
            <label>bear color</label>
            <input onChange={(event) => this.props.updateColor(event.target.value)} value={this.props.color} type="text" className="form-control" id="" placeholder="color"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>

    )
  }
})

export default EditBearForm;
