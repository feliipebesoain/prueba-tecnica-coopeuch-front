import './TrTarea.css'
import Button from "./Button";

const TrTarea = ({tarea, onClickEditbutton, onClickDeleteButton}) => {
  return (
    <tr>
      <td># {tarea.identificador}</td>
      <td>{tarea.descripcion}</td>
      <td className='fecha-creacion-td'>{tarea.fechaCreacion}</td>
      <td className={`vigencia-td ${tarea.vigente ? 'vigente' : 'no-vigente'}`}>
        {tarea.vigente ? 'SI' : 'NO'}
      </td>
      <td>
        <div className='acciones-container'>
          <Button styleButton='secondary' onClick={onClickEditbutton}>Editar</Button>
          <Button styleButton='secondary' onClick={onClickDeleteButton}>Borrar</Button>
        </div>
      </td>
    </tr>
  )
}

export default TrTarea;
