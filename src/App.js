import "./App.css";
import { useState } from "react";
function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resulit, setCalculator] = useState();

  function addition() {
    setCalculator(num1 + num2);
  }
  function subtraction() {
    setCalculator(num1 - num2);
  }
  function multiplication() {
    setCalculator(num1 * num2);
  }
  function division() {
    setCalculator(num1 / num2);
  }
  function percent() {
    setCalculator(num1 % num2);
  }

  return (
    <>
        <div className="container">
        <h2>calculator </h2>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={num1}
              onChange={(e) => setNum1(+e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="0"
              value={num2}
              onChange={(e) => setNum2(+e.target.value)}
            />
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={addition}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={subtraction}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={multiplication}
            >
              *
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={division}
            >
              /
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={percent}
            >
              %
            </button>
          </div>
      
          <div className="resultText">
            <h3>{resulit}</h3>
          </div>
        </div>
    </>
  );
}

export default App;
