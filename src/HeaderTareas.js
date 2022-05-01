import './HeaderTareas.css';
import Button from "./Button";
import Modal from "./Modal";
import FormularioTarea from "./FormularioTarea";

const HeaderTareas = () => {
  const mostrarModal = false;
  return (
    <div>
      <div className='header'>
        <h1>Listado de tareas</h1>
        <Button typeButton='primary'>Crear nueva tarea</Button>
      </div>

      {mostrarModal ?
        <Modal>
          <FormularioTarea/>
        </Modal>
        : false}
    </div>
  )
}

export default HeaderTareas;
