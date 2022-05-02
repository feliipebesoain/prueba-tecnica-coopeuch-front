import './Input.css';

const Input = ({type, onChange, ...props}) => {
  return (
    <input className='input' type={type} onChange={onChange} {...props}/>
  )
}

export default Input;
