import { useState } from 'react'
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const buttonHandlerGood = () => {
    setGood(good + 1);
  }
  const buttonHandlerNeutral = () => {
    setNeutral(neutral + 1);
  }

  const buttonHandlerBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handler={buttonHandlerGood} textButton={"Good"} />
        <Button handler={buttonHandlerNeutral} textButton={"Neutral"} />
        <Button handler={buttonHandlerBad} textButton={"Bad"} />
      </div>
      <Statistics amountOfGoodChoice={good} amountOfNeutralChoice={neutral} amountOfBadChoice={bad} />
      
    </div>
  );
}

export default App;