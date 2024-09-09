import React, { useContext } from "react";
import InterestOnlyContext from "../../context/InterestOnlyContext";

const CalculatorSelect = () => {
    const { isInterestOnly, setIsInterestOnly } =
        useContext(InterestOnlyContext);

    const handleChange = (event) => {
        setIsInterestOnly(event.target.value === "interestOnly");
    };

    return (
        <div className="container">
            <label>Mortgage Type</label>
            <div>
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
            <div>
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
