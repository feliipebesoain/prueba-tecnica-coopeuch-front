import './Button.css'

/** styleButton: primary, secondary */
const Button = ({children, onClick, type, styleButton = 'primary', ...props}) => {
  return (
    <button className={`button ${styleButton}`}
            onClick={onClick}
            type={type}
            {...props}>
      {children}
    </button>
  )
}

export default Button;
