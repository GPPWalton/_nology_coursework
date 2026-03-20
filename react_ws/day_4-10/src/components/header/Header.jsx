import reactImg from "/assets/react-core-concepts.png";
import "./Header.module.css";
const Header = ({ keyword }) => {
    return (
        <header>
            <img src={reactImg} alt='Stylized Atom' />
            <h1>React Essentials</h1>
            <p>
                {keyword} React concepts you will need for almost any app you
                are going to build!
            </p>
        </header>
    );
};

export default Header;
