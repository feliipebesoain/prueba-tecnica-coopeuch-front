import './TrTarea.css'
import Button from "./Button";

const TrTarea = ({tarea}) => {
  return (
    <tr>
      <td>{tarea.identificador}</td>
      <td>{tarea.descripcion}</td>
      <td>{tarea.fechaCreacion}</td>
      <td className={`vigencia-td ${tarea.vigente ? 'vigente' : 'no-vigente'}`}>
        {tarea.vigente ? 'SI' : 'NO'}
      </td>
      <td>
        <div className='acciones-container'>
          <Button typeButton='secondary'>Editar</Button>
          <Button typeButton='secondary'>Borrar</Button>
        </div>
      </td>
    </tr>
  )
}

export default TrTarea;
