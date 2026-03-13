const TabContent = ({ examples, currentTab }) => {
    return (
        <>
            <h3>{examples[currentTab].title}</h3>
            <p>{examples[currentTab].description}</p>
            <pre>
                <code>{examples[currentTab].code}</code>
            </pre>
        </>
    );
};

export default TabContent;
