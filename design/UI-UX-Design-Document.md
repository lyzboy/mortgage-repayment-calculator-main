# UI/UX Design Doc

## Frameworks

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Material-UI](https://material-ui.com/)

## Components

### App
This will be the main component that will hold all the other components.

---

### Calculator
#### CalculatorContainer
This container component will be the top level parent component that all components will be nested under. We can use a provider to pass down the state to the children components.

##### State

- `mortgageAmount`: number
- `mortgageTerm`: number
- `interestRate`: number
- `mortgageType`: string

#### CalculatorInput
This component will be responsible for taking in user input and changing the state of its related data. It will have a label, input field, and designator. The input field and designator will be styled to look like a single element. The designator can be styled to be left or right justified and have a light blue background. The label will sit above the input/designator group.

##### Props
- `label`: string
- `value`: string
- `onChange`: function
- `designator`: string

#### MortgageSelector
This container component will be responsible for selecting the type of mortgage the user is interested in. It will have a label and two mortgage radio buttons.

#### MortgageRadio
This component will be responsible for displaying a radio button and its label. It will be responsible for changing the state of the mortgageType to its current value. It will show a radio and a Label.

##### Props
- `label`: string
- `value`: string
- `onChange`: function

#### Button
This component will be responsible for triggering the calculation of the mortgage. It will have a label and a click event.

---

### Results

#### ResultsPending
This component will show when the user has not yet calculated the mortgage.

#### ResultsCalculated
This container component will be responsible for displaying the results of the mortgage calculation.

#### ResultsHeader
The results header will show text stating the the user has calculated the mortgage and how to adjust the results.

#### ResultsContainer
This container component will hold the compoenents the display the calculated results.

##### State
- `mortgageAmount`: number
- `mortgageTerm`: number
- `interestRate`: number
- `interestOnly`: boolean

#### MonthlyPayments
This component will display the monthly payment amount.

#### TotalPayments
This component will display the total payment amount over the life of the mortgage.

##### Props
- `mortgageAmount`: number
- `mortgageTerm`: number
- `interestRate`: number
- `interestOnly`: boolean