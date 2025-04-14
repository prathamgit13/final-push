import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/10</p>
      <Link to="/">Back to movie list</Link>
    </div>
  );
}

export default MovieDetails;
