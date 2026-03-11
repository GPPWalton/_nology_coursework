import "./App.css";
import MovieList from "./containers/movieList/MovieList";

function App () {
    const movieData = [
        {
            id: 1,
            title: "Jurassic Park",
            director: "Steven Spielberg",
            year: 1993,
            rating: 8.2
        },
        {
            id: 2,
            title: "The Matrix",
            director: "The Wachowskis",
            year: 1999,
            rating: 8.7
        },
        {
            id: 3,
            title: "Sharknado",
            director: "Anthony C. Ferrante",
            year: 2013,
            rating: 3.3
        }
    ];
    return (
        <div>
            <h1>The Movie Catalog</h1>
            <MovieList movieData={movieData} />
        </div>
    );
}

export default App;
