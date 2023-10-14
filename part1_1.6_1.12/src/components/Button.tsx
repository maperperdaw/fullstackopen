const Button = ({textButton, handler}) => {
  return (
    <button onClick={handler} >{textButton}</button>
  );
}

export default Button;