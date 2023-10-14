import { useState } from 'react'
import Button from './components/Button';
import Statistics from './components/Statistics';
import AnecdotesContainer from './components/AnecdotesContainer';

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

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(-1)
  const anecdotesHandler = () => {
    if (selected == anecdotes.length) {
      setSelected(0);
      return;
    }
    setSelected(selected + 1);
  }
  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const updateVotes = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
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
      <AnecdotesContainer anecdotesHandler={anecdotesHandler} anecdotesContent={anecdotes} selected={selected} votesHandler={updateVotes} votes={votes}/>
      
    </div>
  );
}

export default App;