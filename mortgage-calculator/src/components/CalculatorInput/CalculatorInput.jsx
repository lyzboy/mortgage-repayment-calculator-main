import React, {useContext} from "react";
import styles from "./CalculatorInput.module.scss";
import MortgageErrorContext from "../../context/MortgageErrorContext";

const CalculatorInput = ({
    label,
    designator,
    onLeft = true,
    value,
    onChange,
    extraStyle
}) => {

    const {
        mortgageTermError,
        mortgageAmountError, 
        mortgageInterestError
    } = useContext(MortgageErrorContext);

    let error = false;
    if(label === "Mortgage Term") error = mortgageTermError;
    if(label === "Mortgage Amount") error = mortgageAmountError;
    if(label === "Interest Rate") error = mortgageInterestError;

    return (
        <div className={`container ${extraStyle} ${styles.parent}`}>
            <label htmlFor="containerInput">{label}</label>
            {onLeft ? (
                <div className={`${styles.mockInput}  ${error && styles.alert}`}>
                    <p id="containerInput">{designator}</p>
                    <input
                        id="containerInput"
                        type="number"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    ></input>
                </div>
            ) : (
                <div className={`${styles.mockInput}  ${error && styles.alert}`}>
                    <input
                        id="containerInput"
                        type="number"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    ></input>
                    <p>{designator}</p>
                </div>
            )}
            { error &&
            <p className={styles.required}>This field is required</p>
}
        </div>
    );
};

export default CalculatorInput;
