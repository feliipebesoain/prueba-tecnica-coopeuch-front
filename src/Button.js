import './Button.css'

/** typeButton: primary, secondary */
const Button = ({children, typeButton = 'primary', props}) => {
  return (
    <button className={`button ${typeButton}`}
            {...props}>
      {children}
    </button>
  )
}

export default Button;
