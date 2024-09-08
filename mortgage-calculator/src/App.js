import logo from "./logo.svg";
import "./App.css";
import CalculatorInput from "./components/CalculatorInput/CalculatorInput";

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
        </div>
    );
}

export default App;
