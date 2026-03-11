import style from "./MovieCard.module.css";

const MovieCard = ({ id, title, director, year, rating }) => {
    return (
        <section className={style.movieCard} id={id}>
            <h4>{title}</h4>
            <p>{director}</p>
            <p>{year}</p>
            <p>{rating}</p>
        </section>
    );
};

export default MovieCard;
