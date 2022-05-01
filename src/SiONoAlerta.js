import Button from "./Button";
import './SiONoAlerta.css';

const SiONoAlerta = ({text}) => {
  return (
    <div className='siono-container'>
      <p>{text}</p>
      <div className='buttons-container'>
        <Button typeButton='primary'>Si</Button>
        <Button typeButton='secondary'>No</Button>
      </div>

    </div>
  )
}

export default SiONoAlerta;
