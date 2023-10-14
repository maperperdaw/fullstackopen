const AnecdotesContainer = (props) => {

  const { anecdotesHandler, anecdotesContent, selected, votesHandler, votes } = props;
  
  const showAnecdote = selected > -1 && selected < votes.length;

  const getMostVotedAnecdote = () => {
    if (votes.reduce((a, b) => a + b) === 0) {
      return null;
    }
    return anecdotesContent[votes.indexOf(Math.max(...votes))]
  };

  const maxVotesForAnecdote = () => {
    if (votes.reduce((a, b) => a + b) === 0) {
      return 0;
    }
    return Math.max(...votes);
  };

  return (
    <>
      <p>{anecdotesContent[selected]}</p>
      {showAnecdote && <p>has {votes[selected]}</p>}

      <button onClick={anecdotesHandler}>next anecdote</button>
      {showAnecdote && <button onClick={votesHandler}>vote</button>}

      {getMostVotedAnecdote() &&
        <>
          <h2>Anecdote with most votes</h2>
          <p>{getMostVotedAnecdote()}</p>
          <p>has {maxVotesForAnecdote()}</p>
        </>
      }
    </>
  );
};

export default AnecdotesContainer;