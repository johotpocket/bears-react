//these are grabbing stuff from files
import React from 'react';
import EditContainer from './EditContainer';
import HomeContainer from './HomeContainer';
import PostContainer from './PostContainer';
import ViewContainer from './ViewContainer';


var App = React.createClass({

//our default container
  getInitialState: function() {
    return {
      activeComponent: "home",
      editableBearId: null,
    }
},

//this updates our page to show each container when we click the relevant button
  updateActiveComponent(name, id){
   this.setState({ activeComponent: name });
   if(id){
  this.setState({ editableBearId: id} )
        }
},

//a loop that displays each container on our page. we've changed this to display
//only one thing at a time depending on button presses
  showComponent: function(id){
    if(this.state.activeComponent === "home") {
      return <HomeContainer />
    } else if(this.state.activeComponent === "view") {
      return <ViewContainer updateActiveComponent={this.updateActiveComponent}/>
    } else if(this.state.activeComponent === "edit") {
      return <EditContainer id={this.state.editableBearId}/>
    } else if(this.state.activeComponent === "post") {
      return <PostContainer />
    } else {
      return null
    }
},

//our renderer. hard code as little as possible here; pass in stuff from elsewhere
  render: function() {
    return (
      <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="">
            <ul className="nav navbar-nav">
            <li><a onClick={this.updateActiveComponent.bind(this, 'home')}> Home </a></li>
            <li><a onClick={this.updateActiveComponent.bind(this, 'view')}> Bears </a></li>
            <li><a onClick={this.updateActiveComponent.bind(this, 'post')}> Create Bear </a></li>
            </ul>
          </div>
        </div>
      </nav>
      { this.showComponent() }
      </div>
    )
  }
});

export default App;
