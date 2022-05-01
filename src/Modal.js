import './Modal.css';

const Modal = ({children}) => {

  return (
    <div className='modal-container'>
      <div className='modal-body'>
        {children}
      </div>
    </div>
  )

}

export default Modal;
