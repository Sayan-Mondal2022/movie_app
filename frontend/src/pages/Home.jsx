import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api.js";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);

        setError("Failed to load movies!!");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  console.log(movies);

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchedMovies = await searchMovies(searchQuery);
      setMovies(searchedMovies);
      setError("");
    } catch (error) {
      console.log("Failed to search movie...");
      setError(error);
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  }

  return (
    <section className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">...</div>
      ) : (
        <div className="movies-grid">
          {movies.slice(0, 25).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
