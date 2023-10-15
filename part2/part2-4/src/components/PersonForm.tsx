const PersonForm = (props) => {
  const { addNameHandler, newName, handlerOnChangeNameInput, number, handlerOnChangeNumberInput } = props;
  return (
  <form onSubmit={addNameHandler}>
    <div>
      name: <input id="name" value={newName} onChange={handlerOnChangeNameInput} />
    </div>
    <div>
      nubmer: <input id="number" value={number} onChange={handlerOnChangeNumberInput} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  );
}

export default PersonForm;