import React from "react";

const CalculatorSelect = () => {
    return (
        <div className="container">
            <label>Mortgage Type</label>
            <div>
                <input
                    type="radio"
                    id="repayment"
                    name="mortgageType"
                    value="repayment"
                    checked
                />
                <label for="repayment">Repayment</label>
            </div>
            <div>
                <input
                    type="radio"
                    id="interestOnly"
                    name="mortgageType"
                    value="interestOnly"
                />
                <label for="interestOnly">Interest Only</label>
            </div>
        </div>
    );
};

export default CalculatorSelect;
