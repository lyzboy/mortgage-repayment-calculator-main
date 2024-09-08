import React from "react";
import { render, screen } from "@testing-library/react";

import CalculatorSelect from "./CalculatorSelect";

describe("CalculatorSelect", () => {
    it("should render a radio selector", () => {
        render(<CalculatorSelect />);

        // Check if the label with the text "Mortgage Type" is present
        const mortgageLabel = screen.getByText("Mortgage Type");
        expect(mortgageLabel).toBeInTheDocument();

        // Check if the radio buttons with the labels "Repayment" and "Interest Only" are present
        const repaymentRadio = screen.getByLabelText("Repayment");
        const interestOnlyRadio = screen.getByLabelText("Interest Only");

        expect(repaymentRadio).toBeInTheDocument();
        expect(interestOnlyRadio).toBeInTheDocument();
    });
});
