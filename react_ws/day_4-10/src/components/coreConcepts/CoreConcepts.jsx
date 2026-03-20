import style from "./CoreConcepts.module.css";
const CoreConcepts = ({ title, description, img, alt }) => {
    return (
        <section className={style.coreConcepts} alt={alt}>
            <img src={img} />
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    );
};

export default CoreConcepts;
