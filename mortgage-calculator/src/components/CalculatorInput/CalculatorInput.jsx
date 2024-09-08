import React from "react";
import styles from "./CalculatorInput.module.scss";

const CalculatorInput = ({
    label,
    designator,
    onLeft = true,
    value,
    onChange,
}) => {

    const handleChange = (targetValue) => {
        onChange(targetValue);
    }
    return (
        <div className="container">
            <label htmlFor="containerInput">{label}</label>
            {onLeft ? (
                <div className={styles.mockInput}>
                    <p id="containerInput">{designator}</p>
                    <input
                        id="containerInput"
                        type="number"
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                    ></input>
                </div>
            ) : (
                <div className={styles.mockInput}>
                    <input
                        id="containerInput"
                        type="number"
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                    ></input>
                    <p>{designator}</p>
                </div>
            )}
        </div>
    );
};

export default CalculatorInput;
