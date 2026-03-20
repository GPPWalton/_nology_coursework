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
    const [currentTab, setCurrentTab] = useState();

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
                            isSelected={currentTab === "components"}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            onClick={() => handleTabButtonClick("jsx")}
                            isSelected={currentTab === "jsx"}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            onClick={() => handleTabButtonClick("props")}
                            isSelected={currentTab === "props"}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            onClick={() => handleTabButtonClick("state")}
                            isSelected={currentTab === "state"}
                        >
                            State
                        </TabButton>
                    </menu>
                </section>
                <section id='tab-content'>
                    {currentTab == null ? (
                        <p>Examples can be viewed here</p>
                    ) : (
                        <TabContent
                            examples={examples}
                            currentTab={currentTab}
                        />
                    )}
                </section>
            </main>
        </section>
    );
}

export default App;
