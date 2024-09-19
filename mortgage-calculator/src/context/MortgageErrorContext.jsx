import { createContext } from 'react';

const MortgageErrorContext = createContext({
    mortgageTermError: false,
    setMortgageTermError: () => {},
    mortgageAmountError: false,
    setMortgageAmountError: () => {},
    mortgageInterestError: false,
    setMortgageInterestError: () => {},
});

export default MortgageErrorContext;