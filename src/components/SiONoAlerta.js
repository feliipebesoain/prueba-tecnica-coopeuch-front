import Button from "./Button";
import './SiONoAlerta.css';

const SiONoAlerta = ({text, onClickSi, onClickNo}) => {
  return (
    <div className='siono-container'>
      <p>{text}</p>
      <div className='buttons-container'>
        <Button styleButton='primary' onClick={onClickSi}>Si</Button>
        <Button styleButton='secondary' onClick={onClickNo}>No</Button>
      </div>

    </div>
  )
}

export default SiONoAlerta;
