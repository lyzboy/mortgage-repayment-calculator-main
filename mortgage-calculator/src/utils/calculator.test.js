import { calculateMortgage } from "./calculator";

test("calculateMortgage", () => {
    const mortgageAmount = 100000;
    const term = 30;
    const interest = 5;
    const isInterestOnly = false;
    const result = calculateMortgage(
        mortgageAmount,
        term,
        interest,
        isInterestOnly
    );
    expect(result).toEqual({
        monthlyPayment: "536.82",
        totalAmount: "193255.78",
    });
});

test("calculateMortgage - interest only", () => {
    const mortgageAmount = 100000;
    const term = 30;
    const interest = 5;
    const isInterestOnly = true;
    const result = calculateMortgage(
        mortgageAmount,
        term,
        interest,
        isInterestOnly
    );
    expect(result).toEqual({ totalInterest: "93255.78" });
});
