const calculateMortgage = (principal, term, rate, isInterestOnly) => {
    const monthlyPayment = getMonthlyPayment(principal, rate, term);
    if (isInterestOnly) {
        return {
            totalInterest: (monthlyPayment * 12 * term - principal).toFixed(2),
        };
    }
    return {
        monthlyPayment: monthlyPayment.toFixed(2),
        totalAmount: (monthlyPayment * 12 * term).toFixed(2),
    };
};

const getMonthlyPayment = (principal, rate, term) => {
    const P = principal; // principal amount
    const I = rate / 12 / 100; // interest rate
    const N = term * 12; // the number of payments
    // formula: P[I(1+I)^N]/[(1+I)^N-1]
    const M = P * ((I * (1 + I) ** N) / ((1 + I) ** N - 1));
    return M;
};

export { calculateMortgage };
