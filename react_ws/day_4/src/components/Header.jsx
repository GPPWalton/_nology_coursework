const Header = ({ keyword }) => {
    return (
        <header>
            <img src='/assets/react-core-concepts.png' alt='Stylized atom' />
            <h1>React Essentials</h1>
            <p>
                {keyword} React concepts you will need for almost any app you
                are going to build!
            </p>
        </header>
    );
};

export default Header;
