import Header from "./components/Header";

const getRandomWord = wordList => {
    return wordList[Math.floor(Math.random() * wordList.length)];
};
function App () {
    const keyWords = ["Crucial", "Fundamental", "Core"];
    const keyword = getRandomWord(keyWords);
    return (
        <section>
            <Header keyword={keyword} />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </section>
    );
}

export default App;
