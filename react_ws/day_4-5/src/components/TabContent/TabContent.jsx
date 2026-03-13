const TabContent = ({ examples, currentTab }) => {
    return (
        <section id='tab-content'>
            <h3>{examples[currentTab].title}</h3>
            <p>{examples[currentTab].description}</p>
            <pre>
                <code>{examples[currentTab].code}</code>
            </pre>
        </section>
    );
};

export default TabContent;
