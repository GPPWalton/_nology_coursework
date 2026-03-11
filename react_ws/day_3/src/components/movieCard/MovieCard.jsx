import style from "./MovieCard.module.css";

const MovieCard = ({ id, title, director, year, rating }) => {
    return (
        <section className={style.movieCard} id={id}>
            <h4>{title}</h4>
            <p>Director: {director}</p>
            <p>Released: {year}</p>
            <p>Rating: {rating}</p>
        </section>
    );
};

export default MovieCard;
