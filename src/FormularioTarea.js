import './FormularioTarea.css';
import Button from "./Button";
import Input from "./Input";

const FormularioTarea = ({tarea}) => {

  return (
    <form className='form-tarea'>
      <h2 className='titulo-form'>{tarea ? `Editar tarea ${tarea.identificador}` : 'Nueva tarea'}</h2>
      <div className='descripcion-container'>
        <label>Descripción</label>
        <Input placeholder='Descripción' type='text'/>
      </div>
      <div>
        <Input type='checkbox'/>
        <label>¿Está vigente?</label>
      </div>
      <div className='buttons-container'>
        <Button typeButton='primary'>Guardar</Button>
        <Button typeButton='secondary'>Cancelar</Button>
      </div>
    </form>
  )

}

export default FormularioTarea;
