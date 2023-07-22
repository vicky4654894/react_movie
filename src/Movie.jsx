// import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

export default function Movies() {
  const { movie } = useGlobalContext();

  if (!movie) {
    // Render a loading state while waiting for the data
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className='movie-page'>
        <div className='grid grid-4-col'>
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster, Year} = curMovie;
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className='card'>
                  <div className='card-info'>
                    <h2>{Title}</h2>
                    <img src={Poster} alt='This is image' />
                  <div>{Year}</div>
                  
                  
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}
