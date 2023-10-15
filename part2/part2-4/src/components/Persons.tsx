const Persons = (props) => {
  const { personsArray } = props;
  return (
  <>
     { personsArray.length === 0 ? (<p>No result</p>) : personsArray.map(person => <p key={person.id+""}>{`${person.name}  ${person.number}`}</p>)}
  </>
  );
}

export default Persons;