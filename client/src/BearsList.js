import React from 'react';
import BearCard from './BearCard';

//our create function
//var self = this defines our id
//updateActiveComponent will enable us to change existing bears. We pass this to BearsList
var BearsList = React.createClass({
  render: function(){
    var self = this
    var allBearCards = this.props.bears.map(function(item){
      return <BearCard name={item.name} color={item.color} species={item.species}
      deleteBear={self.props.deleteBear}
              id={item._id}
              updateActiveComponent={self.props.updateActiveComponent}
               />
    });
    return (
      <div className="bear-flex">
        { allBearCards }
      </div>
    )
  }
});

export default BearsList;
