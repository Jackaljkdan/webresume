import "./App.scss";
import { Experience } from "./components/Experience";
import { LocaleButton } from "./components/LocaleButton";
import { Summary } from "./components/Summary";

function App() {
    return (
        <>
            <Summary />
            <Experience />
            <LocaleButton className="locale" />
        </>
    );
}

export default App;
