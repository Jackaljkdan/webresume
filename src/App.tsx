import { Experience } from "./components/Experience";
import { LocaleButton } from "./components/LocaleButton";
import { Summary } from "./components/Summary";
import { UpdatedAt } from "./components/UpdatedAt";

function App() {
    return (
        <>
            <Summary />
            <Experience />
            <LocaleButton className="app-locale" />
            <UpdatedAt className="app-updated-at" />
        </>
    );
}

export default App;
