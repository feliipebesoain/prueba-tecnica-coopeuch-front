import './Modal.css';

const Modal = ({children, onClickCloseButton}) => {

  return (
    <div className='modal-container'>
      <div className='modal-body'>
        <div className='close-button' onClick={onClickCloseButton}>X</div>
        {children}
      </div>
    </div>
  )

}

export default Modal;
