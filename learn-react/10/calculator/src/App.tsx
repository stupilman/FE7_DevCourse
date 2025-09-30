import { useState } from "react";
import * as React from "react";
import Decimal from "decimal.js";

interface CalculatorState {
  currentNumber: string;
  previousNumber: string;
  operation: string | null;
  isNewNumber: boolean;
}

export default function App() {
  const [state, setState] = useState<CalculatorState>({
    currentNumber: "0",
    previousNumber: "",
    operation: null,
    isNewNumber: true,
  });
  const handleNumberClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (state.isNewNumber) {
      setState({ ...state, currentNumber: value, isNewNumber: false });
    } else {
      setState({ ...state, currentNumber: state.currentNumber + value });
    }
  };

  const handleOperatorClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (state.currentNumber === "0") return;
    const operator = e.currentTarget.value;
    const current = parseFloat(state.currentNumber || "0");
    if (state.previousNumber !== "" && state.operation) {
      const prev = parseFloat(state.previousNumber);
      let result = 0;

      switch (state.operation) {
        case "+":
          result = new Decimal(prev).plus(current).toNumber();
          break;
        case "-":
          result = new Decimal(prev).minus(current).toNumber();
          break;
        case "*":
          result = new Decimal(prev).times(current).toNumber();
          break;
        case "/":
          result = new Decimal(prev).dividedBy(current).toNumber();
          break;
      }
      if (operator === "=") {
        setState({
          currentNumber: result.toString(),
          previousNumber: "",
          operation: null,
          isNewNumber: true,
        });
      } else {
        setState({
          currentNumber: "",
          previousNumber: result.toString(),
          operation: operator,
          isNewNumber: true,
        });
      }
    } else if (state.currentNumber !== "" && operator === "=") {
      setState({ ...state, isNewNumber: true });
    } else {
      setState({
        currentNumber: "",
        previousNumber: current.toString(),
        operation: operator,
        isNewNumber: true,
      });
    }
  };

  const handleClear = () => {
    setState({
      currentNumber: "0",
      previousNumber: "0",
      operation: null,
      isNewNumber: true,
    });
  };

  const handleDot = () => {
    if (!state.currentNumber.includes(".")) {
      setState({
        ...state,
        currentNumber: state.currentNumber + ".",
        isNewNumber: false,
      });
    }
  };

  return (
    <article className="calculator">
      <form name="forms">
        <input
          type="text"
          name="output"
          value={state.currentNumber ? state.currentNumber : state.operation!}
          readOnly
        />
        <input
          type="button"
          className="clear"
          value="C"
          onClick={handleClear}
        />
        <input
          type="button"
          className="operator"
          value="/"
          onClick={handleOperatorClick}
        />
        <input type="button" value="1" onClick={handleNumberClick} />
        <input type="button" value="2" onClick={handleNumberClick} />
        <input type="button" value="3" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator"
          value="*"
          onClick={handleOperatorClick}
        />
        <input type="button" value="4" onClick={handleNumberClick} />
        <input type="button" value="5" onClick={handleNumberClick} />
        <input type="button" value="6" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator"
          value="+"
          onClick={handleOperatorClick}
        />
        <input type="button" value="7" onClick={handleNumberClick} />
        <input type="button" value="8" onClick={handleNumberClick} />
        <input type="button" value="9" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator"
          value="-"
          onClick={handleOperatorClick}
        />
        <input type="button" className="dot" value="." onClick={handleDot} />
        <input type="button" value="0" onClick={handleNumberClick} />
        <input
          type="button"
          className="operator result"
          value="="
          onClick={handleOperatorClick}
        />
      </form>
    </article>
  );
}
