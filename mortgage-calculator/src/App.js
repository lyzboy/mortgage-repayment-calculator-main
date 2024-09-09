import styles from "./App.module.scss";
import "./styles/Global.module.scss";

import CalculatorContainer from "./containers/CalculatorContainer/CalculatorContainer";
import Results from "./components/Results/Results";

import { useEffect, useState } from "react";

import MortgageTermContext from "./context/MortgageTermContext";

import MortgageAmountContext from "./context/MortgageAmountContext";

import MortgageInterestContext from "./context/MortgageInterestContext";

import InterestOnlyContext from "./context/InterestOnlyContext";

import { calculateMortgage } from "./utils/calculator";

function App() {
    const [mortgageTerm, setMortgageTerm] = useState(0);
    const [mortgageAmount, setMortgageAmount] = useState(0);
    const [mortgageInterest, setMortgageInterest] = useState(0.0);
    const [isInterestOnly, setIsInterestOnly] = useState(false);
    const [monthlyRepayment, setMonthlyRepayment] = useState("$0.00");
    const [totalRepayment, setTotalRepayment] = useState("$0.00");
    const [interestOnlyPayment, setInterestOnlyPayment] = useState("0.00");
    const [isCalculated, setIsCalculated] = useState(false);

    useEffect(() => {
        setIsCalculated(false);
    }, [isInterestOnly]);

    const handleCalculate = () => {
        const result = calculateMortgage(
            mortgageAmount,
            mortgageTerm,
            mortgageInterest,
            isInterestOnly
        );
        setMonthlyRepayment(result.monthlyPayment);
        setTotalRepayment(result.totalAmount);
        setInterestOnlyPayment(result.totalInterest);
        setIsCalculated(true);
    };

    return (
        <div className={styles.App}>
            <MortgageTermContext.Provider
                value={{ mortgageTerm, setMortgageTerm }}
            >
                <MortgageAmountContext.Provider
                    value={{ mortgageAmount, setMortgageAmount }}
                >
                    <MortgageInterestContext.Provider
                        value={{ mortgageInterest, setMortgageInterest }}
                    >
                        <InterestOnlyContext.Provider
                            value={{ isInterestOnly, setIsInterestOnly }}
                        >
                            <CalculatorContainer
                                handleCalculate={() => {
                                    handleCalculate();
                                }}
                            />
                            <Results
                                isCalculated={isCalculated}
                                monthlyRepayment={monthlyRepayment}
                                totalRepayment={totalRepayment}
                                interestOnlyPayment={interestOnlyPayment}
                                isInterestOnly={isInterestOnly}
                            />
                        </InterestOnlyContext.Provider>
                    </MortgageInterestContext.Provider>
                </MortgageAmountContext.Provider>
            </MortgageTermContext.Provider>
        </div>
    );
}

export default App;
