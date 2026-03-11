import MovieCard from "../../components/movieCard/MovieCard";
import style from "./MovieList.module.css";
const MovieList = ({ movieData }) => {
    return (
        <section className={style.movieList}>
            <MovieCard
                id={movieData[0].id}
                title={movieData[0].title}
                director={movieData[0].director}
                year={movieData[0].year}
                rating={movieData[0].rating}
            />
            <MovieCard
                id={movieData[1].id}
                title={movieData[1].title}
                director={movieData[1].director}
                year={movieData[1].year}
                rating={movieData[1].rating}
            />
            <MovieCard
                id={movieData[2].id}
                title={movieData[2].title}
                director={movieData[2].director}
                year={movieData[2].year}
                rating={movieData[2].rating}
            />
        </section>
    );
};

export default MovieList;
