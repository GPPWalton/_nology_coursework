const CoreConcepts = ({ title, description, img, alt }) => {
    return (
        <section alt={alt}>
            <img src={img} />
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    );
};

export default CoreConcepts;
