import "../css/Favorites.css";
import { useMoviesContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMoviesContext();

  if (favorites.length > 0) {
    return (
      <div>
        <h2 className="favorites-heading">Your Favorites</h2>
        <section className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies yet!!!</h2>
      <p>Start adding movies to your favorites and they will appear here!!</p>
    </div>
  );
}

export default Favorites;
