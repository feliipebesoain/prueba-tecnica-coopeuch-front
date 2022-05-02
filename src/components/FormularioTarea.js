import './FormularioTarea.css';
import Button from "./Button";
import Input from "./Input";
import {useState} from "react";

const FormularioTarea = ({tarea = {}, onClickGuardar, onClickCancelar}) => {

  const [formValues, setFormValues] = useState({
    descripcion: tarea.descripcion || '',
    vigente: !!tarea.vigente,
    identificador: tarea.identificador
  });

  const [formValido, setFormValido] = useState(true);

  const formIsValid = () => {
    return formValues.descripcion;
  }

  const handleChange = (e) => {
    const {target} = e;
    setFormValues({
      ...formValues,
      [target.name]: target.type !== 'checkbox' ? target.value : target.checked
    })

    /** En caso de ser valido lo cambia a true, solo se cambia a false cuando se presiona guardar
     *  y el formulario no es valido */
    if (formIsValid()) {
      setFormValido(true)
    }
  }

  const guardarTarea = (e) => {
    e.preventDefault();
    if (!formIsValid()) {
      setFormValido(false)
      return;
    }
    onClickGuardar(formValues)
  }


  return (
    <form className='form-tarea' onSubmit={guardarTarea}>
      <h2 className='titulo-form'>{tarea.identificador ? `Editar tarea #${tarea.identificador}` : 'Nueva tarea'}</h2>
      <div className='descripcion-container'>
        <label><span className='color-red'>*</span> Descripción </label>
        <Input data-testid='descripcion-input'
               placeholder='Descripción'
               type='text'
               name='descripcion'
               value={formValues.descripcion}
               onChange={handleChange}/>
      </div>
      <div className='check-container'>
        <Input
          type='checkbox'
          data-testid='checkbox-vigente'
          onChange={handleChange}
          name='vigente'
          checked={formValues.vigente}/>
        <label>Vigente</label>
      </div>

      {formValido ? null : <div className='color-red'>* Debes ingresar una descripción</div>}

      <div className='buttons-container'>
        <Button
          data-testid='boton-guardar'
          styleButton='primary'
          type='submit'
          onClick={guardarTarea}>
          Guardar
        </Button>
        <Button data-testid='boton-cancelar'
                styleButton='secondary'
                type='button'
                onClick={onClickCancelar}>
          Cancelar
        </Button>
      </div>
    </form>
  )

}

export default FormularioTarea;
