const Part = (props) => {
  const {title, exercise} = props;
  return (
    <p>{title} {exercise}</p>
  );
}

export default Part;