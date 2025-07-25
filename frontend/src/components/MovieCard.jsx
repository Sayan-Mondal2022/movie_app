import "../css/MovieCard.css";
import { useMoviesContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMoviesContext();

  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault()

    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie)
  }

  return (
    <section className="movie-card">
      <div className="movies-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </section>
  );
}

export default MovieCard;
