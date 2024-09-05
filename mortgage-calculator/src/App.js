import logo from "./logo.svg";
import "./App.css";
import "./styles/Global.module.scss";

import CalculatorInput from "./components/CalculatorInput/CalculatorInput";

function App() {
    return (
        <div className="App">
            <CalculatorInput label="Mortgage Amount" designator="$" />
            <div className="testClass">
                <CalculatorInput
                    label="Mortgage Term"
                    designator="years"
                    onLeft={false}
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
