import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CalculatorInput from "./CalculatorInput";

describe("CalculatorInput", () => {
    it("should render an input field", () => {
        const { getByTestId } = render(<CalculatorInput />);
        const inputElement = getByTestId("calculator-input");
        expect(inputElement).toBeInTheDocument();
    });

    it("should update the value when the input changes", () => {
        const { getByTestId } = render(<CalculatorInput />);
        const inputElement = getByTestId("calculator-input");
        fireEvent.change(inputElement, { target: { value: "500000" } });
        expect(inputElement.value).toBe("500000");
    });

    it("should call the onChange callback when the input changes", () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = render(
            <CalculatorInput onChange={onChangeMock} />
        );
        const inputElement = getByTestId("calculator-input");
        fireEvent.change(inputElement, { target: { value: "500000" } });
        expect(onChangeMock).toHaveBeenCalledWith("500000");
    });
});
