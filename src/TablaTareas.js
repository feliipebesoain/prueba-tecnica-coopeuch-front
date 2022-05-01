import TrTarea from "./TrTarea";
import './TablaTarea.css';
import Modal from "./Modal";
import FormularioTarea from "./FormularioTarea";
import SiONoAlerta from "./SiONoAlerta";

const TablaTareas = () => {

  const tareas = [
    {identificador: 1, descripcion: 'Descripcion', fechaCreacion: '2022/01/1', vigente: true},
    {identificador: 2, descripcion: 'Descripcion', fechaCreacion: '2022/01/1', vigente: false}
  ];

  const editarTarea = false;
  const eliminarTarea = false;

  if (!tareas.length) {
    return (<p>No se encontraron tareas. <b>¡Agrega una!</b></p>)
  }
  return (
    <div>
      <table className='tabla-tareas'>
        <thead>
        <tr>
          <th>Identificador</th>
          <th className='descripcion-row'>Descripcion</th>
          <th>Creación</th>
          <th>Vigencia</th>
          <th style={{textAlign: 'center'}}>Acciones</th>
        </tr>
        </thead>
        <tbody>{tareas.map(tarea => <TrTarea key={tarea.identificador} tarea={tarea}/>)}</tbody>
      </table>

      {editarTarea ? <Modal><FormularioTarea tarea={tareas[0]}/></Modal> : null}
      {eliminarTarea ? <Modal><SiONoAlerta text='¿Estás seguro que quiere eliminar la tarea?'/></Modal> : null}

    </div>
  )
}

export default TablaTareas;
