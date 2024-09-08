import React, { useContext } from "react";

import styles from "./CalculatorContainer.module.scss";

import CalculatorInput from "../../components/CalculatorInput/CalculatorInput";
import CalculatorSelect from "../../components/CalculatorSelect/CalculatorSelect";

import MortgageTermContext from "../../context/MortgageTermContext";

const CalculatorContainer = () => {
    const { mortgageTerm, setMortgageTerm } = useContext(MortgageTermContext);
    return (
        <div className={styles.container}>
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
            <CalculatorSelect />
        </div>
    );
};

export default CalculatorContainer;
