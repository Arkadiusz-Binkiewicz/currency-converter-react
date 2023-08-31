import './App.css';
import { currencies } from './currencies';
import { Form } from './Form'
import { Clock } from "./Clock"
import { useState } from 'react';

function App() {
  const [result, setResult] = useState();



  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <div className="App">
      <Clock/>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;
