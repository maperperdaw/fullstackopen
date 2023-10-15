const Filter = (props) => {
const { onChange, filter } = props;
  
  return (
    <>
    filter shown with <input value={filter} type="text" onChange={onChange} />
    </>
  )
};

export default Filter;