import React, { useContext } from "react";

import styles from "./CalculatorContainer.module.scss";

import CalculatorInput from "../../components/CalculatorInput/CalculatorInput";
import CalculatorSelect from "../../components/CalculatorSelect/CalculatorSelect";

import MortgageTermContext from "../../context/MortgageTermContext";
import MortgageAmountContext from "../../context/MortgageAmountContext";
import MortgageInterestContext from "../../context/MortgageInterestContext";

const CalculatorContainer = ({ handleCalculate }) => {
    const { mortgageTerm, setMortgageTerm } = useContext(MortgageTermContext);
    const { mortgageAmount, setMortgageAmount } = useContext(
        MortgageAmountContext
    );
    const { mortgageInterest, setMortgageInterest } = useContext(
        MortgageInterestContext
    );

    return (
        <div className={styles.container}>
            <CalculatorInput
                label="Mortgage Amount"
                designator="$"
                value={mortgageAmount}
                onChange={setMortgageAmount}
            />
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
                    value={mortgageInterest}
                    onChange={setMortgageInterest}
                />
            </div>
            <CalculatorSelect />
            <button onClick={handleCalculate}>Calculate Repayments</button>
        </div>
    );
};

export default CalculatorContainer;
