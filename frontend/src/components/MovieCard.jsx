function MovieCard({movie}){

    function onFavoriteClick(){
        alert("Added to favorite section")
    }    

    return (
        <section className="movie-card">
            <div className="movies-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </section>
    );
}

export default MovieCard;