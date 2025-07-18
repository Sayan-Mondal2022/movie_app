import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "One Piece", release_data: "2020" },
    { id: 2, title: "One Piece 1", release_data: "2021" },
    { id: 3, title: "One Piece 2", release_data: "2022" },
    { id: 4, title: "One Piece 3", release_data: "2023" },
  ];

  function handleSearch() {}

  return (
    <section className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
        />

        <button type="submit" className="search-btn">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}

export default Home;
