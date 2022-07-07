import React from 'react';

function Card(props: { src: string }) {
  return (
    <div className="w-64 h-70 flex items-center justify-center flex-col rounded-md shadow-md">
      <img className="w-64 h-64 object-cover rounded-t-md" src={props.src} alt="cat" />
      <p>Name</p>
      <p>Country</p>
    </div>
  );
}

export default Card;
