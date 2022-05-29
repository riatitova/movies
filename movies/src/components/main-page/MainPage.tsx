import React from 'react';

function MainPage() {
  return (
    <div className="main-page flex items-center flex-col">
      <div className="w-full flex items-center justify-center">
        <input
          className="m-2.5 px-0.5 w-1/2 h-12 rounded-lg outline-none border-2 border-cyan-500 text-cyan-500"
          placeholder="Enter movie"
        ></input>
        <button className="w-32 h-12 bg-cyan-500 border-2 border-cyan-500 rounded-lg text-white">
          Search
        </button>
      </div>
    </div>
  );
}

export default MainPage;
