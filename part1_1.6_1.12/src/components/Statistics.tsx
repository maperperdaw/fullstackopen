import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  const { amountOfGoodChoice, amountOfNeutralChoice, amountOfBadChoice } = props;
  const total = amountOfBadChoice + amountOfGoodChoice + amountOfNeutralChoice;

  return (
    <>
      <h1>statistics</h1>
      {
        (total === 0) ? <p>No feedback given</p> :
          <>
            <StatisticLine text={"good"} value={amountOfGoodChoice} />
            <StatisticLine text={"neutral"} value={amountOfNeutralChoice} />
            <StatisticLine text={"bad"} value={amountOfBadChoice} />
            <StatisticLine text={"all"} value={total} />
            <StatisticLine text={"positive"} value={amountOfGoodChoice * 100 / total + "%"} />
          </>
      }
    </>
  )
}

export default Statistics;