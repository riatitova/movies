import React from 'react';

function Card(props: { src: string }) {
  return (
    <div className="w-64 flex items-center justify-center flex-col rounded-md shadow-md">
      <img className="w-full h-80 rounded-t-md" src={props.src} alt="cat"/>
      <p>Name</p>
      <p>country</p>
    </div>
  );
}

export default Card;
