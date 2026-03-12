import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import Header from "./components/header/Header";
import componentImg from "/assets/components.png";

const getRandomWord = wordList => {
    return wordList[Math.floor(Math.random() * wordList.length)];
};
function App () {
    const keyWords = ["Crucial", "Fundamental", "Core"];
    const keyword = getRandomWord(keyWords);
    const coreConcepts = [
        {
            title: "Components",
            description: "The UI building block.",
            alt: "component icon",
            img: componentImg
        }
    ];
    return (
        <section>
            <Header keyword={keyword} />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {coreConcepts.map(coreConcept => {
                            return (
                                <CoreConcepts
                                    title={coreConcept.title}
                                    description={coreConcept.description}
                                    img={coreConcept.img}
                                    alt={coreConcept.alt}
                                />
                            );
                        })}
                    </ul>
                </section>
            </main>
        </section>
    );
}

export default App;
