import { useEffect, useState } from "react";

import styles from "./App.module.scss";
import "./styles/Global.module.scss";

import { calculateMortgage } from "./utils/calculator";

import MortgageTermContext from "./context/MortgageTermContext";
import MortgageAmountContext from "./context/MortgageAmountContext";
import MortgageInterestContext from "./context/MortgageInterestContext";
import InterestOnlyContext from "./context/InterestOnlyContext";
import MortgageErrorContext from "./context/MortgageErrorContext";

import CalculatorContainer from "./containers/CalculatorContainer/CalculatorContainer";
import Results from "./components/Results/Results";

function App() {
    const [mortgageTerm, setMortgageTerm] = useState("");
    const [mortgageAmount, setMortgageAmount] = useState("");
    const [mortgageInterest, setMortgageInterest] = useState("");
    const [isInterestOnly, setIsInterestOnly] = useState(false);
    const [monthlyRepayment, setMonthlyRepayment] = useState("$0.00");
    const [totalRepayment, setTotalRepayment] = useState("$0.00");
    const [interestOnlyPayment, setInterestOnlyPayment] = useState("0.00");
    const [isCalculated, setIsCalculated] = useState(false);
    const [mortgageTermError, setMortgageTermError] = useState(false);
    const [mortgageAmountError, setMortgageAmountError] = useState(false);
    const [mortgageInterestError, setMortgageInterestError] = useState(false);

    useEffect(() => {
        setIsCalculated(false);
    }, [isInterestOnly]);

    useEffect(() => {
        setMortgageAmountError(false);
    }, [mortgageAmount]);

    useEffect(() => {
        setMortgageInterestError(false);
    }, [mortgageInterest]);

    useEffect(() => {
        setMortgageTermError(false);
    }, [mortgageTerm]);

    const handleClearItems = () => {
        setMortgageAmount("");
        setMortgageInterest("");
        setMortgageTerm("");
        setIsCalculated(false);
    }

    const handleCalculate = () => {
        if (validateForm()) {
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
        }
    };

    const validateForm = () => {
        let hasError = false;
        let localMortgageTermError = false;
        let localMortgageAmountError = false;
        let localMortgageInterestError = false;

        if (!mortgageTerm) {
            localMortgageTermError = true;
            hasError = true;
        }
        if (!mortgageAmount) {
            localMortgageAmountError = true;
            hasError = true;
        }
        if (!mortgageInterest) {
            localMortgageInterestError = true;
            hasError = true;
        }

        setMortgageTermError(localMortgageTermError);
        setMortgageAmountError(localMortgageAmountError);
        setMortgageInterestError(localMortgageInterestError);

        return !hasError;
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
                            <MortgageErrorContext.Provider
                                value={{
                                    mortgageTermError,
                                    setMortgageTermError,
                                    mortgageAmountError,
                                    setMortgageAmountError,
                                    mortgageInterestError,
                                    setMortgageInterestError,
                                }}
                            >
                                <CalculatorContainer
                                    handleCalculate={() => {
                                        handleCalculate();
                                    }}
                                    handleClearItems={()=>{
                                        handleClearItems();
                                    }}
                                />
                                <Results
                                    isCalculated={isCalculated}
                                    monthlyRepayment={monthlyRepayment}
                                    totalRepayment={totalRepayment}
                                    interestOnlyPayment={interestOnlyPayment}
                                    isInterestOnly={isInterestOnly}
                                />
                            </MortgageErrorContext.Provider>
                        </InterestOnlyContext.Provider>
                    </MortgageInterestContext.Provider>
                </MortgageAmountContext.Provider>
            </MortgageTermContext.Provider>
        </div>
    );
}

export default App;
