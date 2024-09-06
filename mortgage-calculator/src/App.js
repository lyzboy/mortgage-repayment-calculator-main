import styles from "./App.module.scss";
import "./styles/Global.module.scss";

import CalculatorContainer from "./containers/CalculatorContainer/CalculatorContainer";
import Results from "./components/Results/Results";

function App() {
    return (
        <div className={styles.App}>
            <CalculatorContainer />
            <Results />
        </div>
    );
}

export default App;
