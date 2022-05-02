import './HeaderTareas.css';
import Button from "./Button";
import Modal from "./Modal";
import FormularioTarea from "./FormularioTarea";
import {useState} from "react";

const HeaderTareas = ({onGuardarTarea}) => {

  const guardarTarea = (tarea) => {
    onGuardarTarea(tarea);
    setMostrarModal(false);
  }

  const cancelarCreacion = () => {
    setMostrarModal(false);
  }
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div>
      <div className='header'>
        <h1>Listado de tareas</h1>
        <Button styleButton='primary' onClick={() => setMostrarModal(true)}>Crear nueva tarea</Button>
      </div>

      {mostrarModal ?
        <Modal onClickCloseButton={cancelarCreacion}>
          <FormularioTarea onClickGuardar={guardarTarea} onClickCancelar={cancelarCreacion}/>
        </Modal>
        : false}
    </div>
  )
}

export default HeaderTareas;
