import styles from "./App.module.scss";
import "./styles/Global.module.scss";

import CalculatorContainer from "./containers/CalculatorContainer/CalculatorContainer";
import Results from "./components/Results/Results";

import { createContext, useState } from "react";

import MortgageTermContext from "./context/MortgageTermContext";

function App() {
    const [mortgageTerm, setMortgageTerm] = useState(0);
    return (
        <div className={styles.App}>
            <MortgageTermContext.Provider
                value={{ mortgageTerm, setMortgageTerm }}
            >
                <CalculatorContainer />
                <Results />
            </MortgageTermContext.Provider>
        </div>
    );
}

export default App;
