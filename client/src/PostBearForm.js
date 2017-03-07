import React from 'react';

var PostBearForm = React.createClass({
  render: function()
  {
    return (
      <div className="jumbotron">
      <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label>name of bear</label>
            <input onChange={this.props.updateName.bind(this, event.target.value)}
            type="text" className="form-control" id="" placeholder="name"/>
          </div>
          <div className="form-group">
            <label>species of bear</label>
            <input onChange={this.props.updateSpecies.bind(this, event.target.value)}
            type="text" className="form-control" id="" placeholder="species"/>
          </div>
          <div className="form-group">
            <label>color of bear</label>
            <input onChange={this.props.updateColor.bind(this, event.target.value)}
            type="text" className="form-control" id="" placeholder="color"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </div>
    )
  }
})

export default PostBearForm;
