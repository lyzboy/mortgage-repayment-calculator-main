import React, { useContext } from "react";

import styles from "./CalculatorContainer.module.scss";

import CalculatorInput from "../../components/CalculatorInput/CalculatorInput";
import CalculatorSelect from "../../components/CalculatorSelect/CalculatorSelect";

import MortgageTermContext from "../../context/MortgageTermContext";
import MortgageAmountContext from "../../context/MortgageAmountContext";
import MortgageInterestContext from "../../context/MortgageInterestContext";

const CalculatorContainer = ({ handleCalculate, handleClearItems }) => {
    const { mortgageTerm, setMortgageTerm } = useContext(MortgageTermContext);
    const { mortgageAmount, setMortgageAmount } = useContext(
        MortgageAmountContext
    );
    const { mortgageInterest, setMortgageInterest } = useContext(
        MortgageInterestContext
    );

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Mortgage Calculator</h1>
                <p onClick={handleClearItems}>Clear All</p>
            </div>
            <CalculatorInput
                label="Mortgage Amount"
                designator="$"
                value={mortgageAmount}
                onChange={setMortgageAmount}
            />
            <div className={styles.termRate}>
                <CalculatorInput
                    label="Mortgage Term"
                    designator="years"
                    onLeft={false}
                    value={mortgageTerm}
                    onChange={setMortgageTerm}
                    extraStyle={styles.extraContainer}
                />
                <CalculatorInput
                    label="Interest Rate"
                    designator="%"
                    onLeft={false}
                    value={mortgageInterest}
                    onChange={setMortgageInterest}
                    extraStyle={styles.extraContainer}
                />
            </div>
            <CalculatorSelect />
            <button onClick={handleCalculate}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#133041"
                        d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
                    />
                </svg>
                Calculate Repayments
            </button>
        </div>
    );
};

export default CalculatorContainer;
