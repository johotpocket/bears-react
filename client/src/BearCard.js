import React from 'react';

//this is what our bears will display as in our View page. This is also where we're putting our buttons
var BearCard = function (props) {
  return (
    <div className="bear-panel">
      <h4>{ props.name }</h4>
      <p> { props.species } </p>
      <p> { props.color } </p>
      <button onClick={() => props.deleteBear(props.id)} className="btn btn-warning">Delete The Bear</button>
      <button onClick={() => props.updateActiveComponent('edit', props.id)} className="btn btn-warning">Edit The Bear</button>
    </div>
  )
};

export default BearCard
