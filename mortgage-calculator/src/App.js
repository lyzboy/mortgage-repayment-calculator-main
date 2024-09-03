import logo from "./logo.svg";
import "./App.css";
import CalculatorInput from "./components/CalculatorInput/CalculatorInput";

function App() {
    return (
        <div className="App">
            <CalculatorInput label="Mortgage Amount" designator="$" />
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
    );
}

export default App;
