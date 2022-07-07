import React, { useEffect, useRef, useState } from 'react';

export const addItemToLS = (movie: string) => {
  localStorage.setItem('searching-movie', movie);
};

export const getItemFromLS = () => {
  return localStorage.getItem('searching-movie');
};

function SearchBar() {
  const [searchingMovie, setSearchingMovie] = useState('');
  const movieRef = useRef(searchingMovie);

  useEffect(() => {
    const movie = getItemFromLS();
    if (movie !== null) {
      setSearchingMovie(movie);
    }
    return () => {
      addItemToLS(movieRef.current);
    };
  }, []);

  useEffect(() => {
    movieRef.current = searchingMovie;
  }, [searchingMovie]);

  return (
    <div className="w-full flex items-center justify-center">
      <input
        className="m-2.5 px-0.5 w-1/2 h-12 rounded-lg outline-none border-2 border-cyan-500 text-cyan-500"
        placeholder="Enter movie"
        data-testid="input"
        value={searchingMovie}
        onChange={(e) => setSearchingMovie(e.target.value)}
      />
      <button className="w-32 h-12 bg-cyan-500 border-2 border-cyan-500 rounded-lg text-white">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
