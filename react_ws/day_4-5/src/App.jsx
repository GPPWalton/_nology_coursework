import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import Header from "./components/header/Header";
import { coreConcepts } from "./data/coreConceptsData";
import { examples } from "./data/exampleData";
import TabButton from "./components/tabButton/TabButton";
import { useState } from "react";
import TabContent from "./components/TabContent/TabContent";

const getRandomWord = wordList => {
    return wordList[Math.floor(Math.random() * wordList.length)];
};
function App () {
    const [currentTab, setCurrentTab] = useState("components");

    const handleTabButtonClick = value => {
        setCurrentTab(value);
    };
    const keyWords = ["Crucial", "Fundamental", "Core"];
    const keyword = getRandomWord(keyWords);

    return (
        <section>
            <Header keyword={keyword} />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {coreConcepts.map(coreConcept => {
                            return <CoreConcepts {...coreConcept} />;
                        })}
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            onClick={() => handleTabButtonClick("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton onClick={() => handleTabButtonClick("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton
                            onClick={() => handleTabButtonClick("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            onClick={() => handleTabButtonClick("state")}
                        >
                            State
                        </TabButton>
                    </menu>
                </section>
                <TabContent examples={examples} currentTab={currentTab} />
            </main>
        </section>
    );
}

export default App;
