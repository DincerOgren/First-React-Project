import { useState } from "react";

import './CounterApp.css'
function App(){

    const [count, setCount] = useState(0);
    const [step,setStep] = useState(1);

    const incrementTwice= () => {
        // This is not working
        // setCount(count+1);
        // setCount(count+1);
        // This will work
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }


    const decrementCount =() => {
        setCount(count-step);
    };

    return(
    <div className="counter-container">

        <h1 className="counter-title">Counter Value: {count}</h1>
      
        <div className="step-control">
            <label>Step: </label>
            <input
            type='number'
            className="step-input"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}/>
        </div>

      <div className="button-group">
        <button className="counter-button" onClick={() => setCount(count + step)}>
          Increment
        </button>
        <button className="counter-button decrement-button" onClick={decrementCount}>
          Decrement
        </button>
      </div>

    </div>

    )
}


export default App;