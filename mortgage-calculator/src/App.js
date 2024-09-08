import styles from "./App.module.scss";
import "./styles/Global.module.scss";

import CalculatorContainer from "./containers/CalculatorContainer/CalculatorContainer";
import Results from "./components/Results/Results";

import { useState } from "react";

function App() {

    const [mortgageTerm, setMortgageTerm] = useState(0);
    return (
        <div className="App">
                <CalculatorInput label="Mortgage Amount" designator="$" />
                <div className="testClass">
                    <CalculatorInput
                        label="Mortgage Term"
                        designator="years"
                        onLeft={false}
                        value={mortgageTerm}
                        onChange={setMortgageTerm}
                    />
                    <CalculatorInput
                        label="Interest Rate"
                        designator="%"
                        onLeft={false}
                    />
                </div>
        <div className={styles.App}>
            <CalculatorContainer />
            <Results />
        </div>
    );
}

export default App;
