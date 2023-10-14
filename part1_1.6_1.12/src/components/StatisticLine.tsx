const StatisticLine = (props) => {
  const { value, text } = props;
  
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default StatisticLine;