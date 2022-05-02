import './Alert.css';

/** tipo: success, error, warning */
const Alert = ({texto, tipo = 'success', onDisappear, timer = 4000}) => {

  setTimeout(onDisappear, timer);

  return (
    <div className={`alert ${tipo}`} onClick={onDisappear}>
      {texto}
    </div>
  )
}

export default Alert;
