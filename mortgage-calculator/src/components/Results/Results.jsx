import React from "react";

import styles from "./Results.module.scss";

const Results = () => {
    return (
        <div className={styles.container}>
            <h2>Your results</h2>
            <p>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                "calculate repayments" again.
            </p>
            <div>
                <p>Your monthly repayments</p>
                <p>$1,797,74</p>
                <hr />
                <p>Total you'll repay over the term</p>
                <p>$539,322.94</p>
            </div>
        </div>
    );
};

export default Results;
