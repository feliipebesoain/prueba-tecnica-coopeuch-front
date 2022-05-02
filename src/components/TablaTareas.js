import TrTarea from "./TrTarea";
import './TablaTarea.css';
import Modal from "./Modal";
import FormularioTarea from "./FormularioTarea";
import SiONoAlerta from "./SiONoAlerta";
import {useState} from "react";

const TablaTareas = ({tareas = [], onSaveTareaEditada, onEliminarTarea}) => {

  const [editarTareaModal, setEditarTareaModal] = useState({show: false, tarea: {}});
  const [eliminarTareaModal, setEliminarTareaModal] = useState({show: false, tarea: {}});

  const actualizarTarea = (tarea) => {
    /** Se ejecuta el metodo del componente padre y luego cierra el modal*/
    onSaveTareaEditada(tarea)
    setEditarTareaModal({show: false, tarea: null})
  }

  const eliminarTarea = (tarea) => {
    /** Se ejecuta el metodo del componente padre y luego cierra el modal*/
    onEliminarTarea(tarea)
    setEliminarTareaModal({show: false, tarea: null})
  }


  if (!tareas.length) {
    return (<p>No se encontraron tareas. <b>¡Crea una!</b></p>)
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
        <tbody>
        {tareas.map(tarea =>
          <TrTarea
            key={tarea.identificador}
            tarea={tarea}
            onClickEditbutton={() => setEditarTareaModal({show: true, tarea: tarea})}
            onClickDeleteButton={() => setEliminarTareaModal({show: true, tarea: tarea})}
          />
        )}
        </tbody>
      </table>

      {editarTareaModal.show ?
        <Modal onClickCloseButton={() => setEditarTareaModal({show: false, tarea: null})}>
          <FormularioTarea
            tarea={editarTareaModal.tarea}
            onClickGuardar={actualizarTarea}
            onClickCancelar={() => setEditarTareaModal({show: false, tarea: null})}
          />
        </Modal>
        : null
      }

      {eliminarTareaModal.show ?
        <Modal onClickCloseButton={() => setEliminarTareaModal({show: false, tarea: null})}>
          <SiONoAlerta
            text={`¿Estás seguro que quieres eliminar la tarea #${eliminarTareaModal.tarea.identificador}?`}
            onClickSi={() => eliminarTarea(eliminarTareaModal.tarea)}
            onClickNo={() => setEliminarTareaModal({show: false, tarea: null})}
          />
        </Modal>
        : null}

    </div>
  )
}

export default TablaTareas;
