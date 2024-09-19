import { useEffect, useState } from "react";
import validator from "validator";

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
    const [mortgageTerm, setMortgageTerm] = useState();
    const [mortgageAmount, setMortgageAmount] = useState();
    const [mortgageInterest, setMortgageInterest] = useState();
    const [isInterestOnly, setIsInterestOnly] = useState(false);
    const [monthlyRepayment, setMonthlyRepayment] = useState("$0.00");
    const [totalRepayment, setTotalRepayment] = useState("$0.00");
    const [interestOnlyPayment, setInterestOnlyPayment] = useState("0.00");
    const [isCalculated, setIsCalculated] = useState(false);
    const [formValidated, setFormValidated] = useState(false);
    const [mortgageTermError, setMortgageTermError] = useState(false);
    const [mortgageAmountError, setMortgageAmountError] = useState(false);
    const [mortgageInterestError, setMortgageInterestError] = useState(false);

    useEffect(() => {
        setIsCalculated(false);
    }, [isInterestOnly]);

    const handleCalculate = () => {
        validateForm();
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

    const validateForm = ()=>{
        if(!mortgageTerm){
            console.log("mortgage is undefined");
            return;
        }
        if(validator.isFloat(mortgageTerm) || validator.isInt(mortgageTerm)){
            console.log("mortgage term is number");
        } else console.log("mortgage term is NAN");
    }

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
                            <MortgageErrorContext.Provider value={{
                                mortgageTermError,
                                setMortgageTermError,
                                mortgageAmountError,
                                setMortgageAmountError,
                                mortgageInterestError,
                                setMortgageInterestError
                            }}>
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
                            </MortgageErrorContext.Provider>
                        </InterestOnlyContext.Provider>
                    </MortgageInterestContext.Provider>
                </MortgageAmountContext.Provider>
            </MortgageTermContext.Provider>
        </div>
    );
}

export default App;
