import React from "react";

import CalculatorInput from "../components/CalculatorInput/CalculatorInput";
import CalculatorSelect from "../components/CalculatorSelect/CalculatorSelect";

const CalculatorContainer = () => {
    return (
        <div>
            <CalculatorInput label="Mortgage Amount" designator="$" />
            <div className="testClass">
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
            <CalculatorSelect />
        </div>
    );
};

export default CalculatorContainer;
