import React from "react";
import styles from "./Results.module.scss";

const Results = ({
    isCalculated,
    monthlyRepayment,
    totalRepayment,
    interestOnlyPayment,
    isInterestOnly,
}) => {
    return (
        <div className={styles.container}>
            {!isCalculated ? (
                <>
                    <h2>Results shown here</h2>
                    <p>
                        Complete the form and click "calculate repayments" to
                        see what your monthly repayments estimate would be
                    </p>
                </>
            ) : (
                <>
                    <h2>Your results</h2>
                    <p>
                        Your results are shown below based on the information
                        you provided. To adjust the results, edit the form and
                        click "calculate repayments" again.
                    </p>
                    {isInterestOnly ? (
                        <div>
                            <p>Interest Only Amount</p>
                            <p>{interestOnlyPayment}</p>
                        </div>
                    ) : (
                        <div>
                            <p>Your monthly repayments</p>
                            <p>{monthlyRepayment}</p>
                            <hr />
                            <p>Total you'll repay over the term</p>
                            <p>{totalRepayment}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Results;
