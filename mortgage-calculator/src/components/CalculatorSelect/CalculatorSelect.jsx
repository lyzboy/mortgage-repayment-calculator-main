import React, { useContext } from "react";
import InterestOnlyContext from "../../context/InterestOnlyContext";

import styles from "./CalculatorSelect.module.scss";

const CalculatorSelect = () => {
    const { isInterestOnly, setIsInterestOnly } =
        useContext(InterestOnlyContext);

    const handleChange = (event) => {
        setIsInterestOnly(event.target.value === "interestOnly");
    };

    return (
        <div className={`container ${styles.container}`}>
            <label>Mortgage Type</label>
            <div
                className={`${styles.radio} ${
                    !isInterestOnly && styles.selectContainer
                }`}
            >
                <input
                    type="radio"
                    id="repayment"
                    name="mortgageType"
                    value="repayment"
                    checked={!isInterestOnly}
                    onChange={handleChange}
                />
                <label htmlFor="repayment">Repayment</label>
            </div>
            <div
                className={`${styles.radio} ${
                    isInterestOnly && styles.selectContainer
                }`}
            >
                <input
                    type="radio"
                    id="interestOnly"
                    name="mortgageType"
                    value="interestOnly"
                    checked={isInterestOnly}
                    onChange={handleChange}
                />
                <label htmlFor="interestOnly">Interest Only</label>
            </div>
        </div>
    );
};

export default CalculatorSelect;
