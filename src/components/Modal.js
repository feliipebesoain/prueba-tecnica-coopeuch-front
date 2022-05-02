import './Modal.css';

const Modal = ({children, onClickCloseButton}) => {

  return (
    <div className='modal-container' data-testid='modal'>
      <div className='modal-body'>
        <div className='close-button' data-testid='close-modal-button' onClick={onClickCloseButton}>X</div>
        {children}
      </div>
    </div>
  )

}

export default Modal;
