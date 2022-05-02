import './App.css';
import TablaTareas from "./components/TablaTareas";
import Card from "./components/Card";
import Container from "./components/Container";
import HeaderTareas from "./components/HeaderTareas";
import {useDispatch, useSelector} from "react-redux";
import {
  actualizarTareaFetchThunk,
  buscarTareasFetchThunk,
  eliminarTareaFetchThunk,
  nuevaTareaFetchThunk,
  selectStatus,
  selectTareas
} from "./features/tareas";
import {useEffect, useState} from "react";
import Loading from "./components/Loading";
import Alert from "./components/Alert";

const App = () => {
  const dispatch = useDispatch();
  const tareas = useSelector(selectTareas);
  const status = useSelector(selectStatus);

  const [showAlert, setShowAlert] = useState({show: false, type: '', text: ''});

  const listarTareas = (mensaje = '') => {
    dispatch(buscarTareasFetchThunk(mensaje))
  }

  const crearTarea = (tarea) => {
    dispatch(nuevaTareaFetchThunk(tarea, listarTareas));
  };

  const actualizarTarea = (tarea) => {
    dispatch(actualizarTareaFetchThunk(tarea, listarTareas))
  }

  const eliminarTarea = (tarea) => {
    dispatch(eliminarTareaFetchThunk(tarea.identificador, listarTareas))
  }


  const closeAlert = () => {
    setShowAlert({show: false, type: '', text: ''});
  }


  useEffect(() => {
    listarTareas();
  }, []);

  /** Cada vez que se cambia el status verifica si hay un mensaje que mostrar,
   * muestra un mensaje siempre que haya un error o cuando status.message tiene valor */
  useEffect(() => {
    if (status.loading !== 'succeded') return

    if (status.error) {
      setShowAlert({show: true, type: 'error', text: status.error});
    } else if (status.message) {
      setShowAlert({show: true, type: 'success', text: status.message});
    }
  }, [status]);


  return (
    <Container>
      <p>test</p>
      <Card>
        <div className="body">
          <HeaderTareas onGuardarTarea={crearTarea}/>
          <TablaTareas
            tareas={tareas}
            onSaveTareaEditada={actualizarTarea}
            onEliminarTarea={eliminarTarea}
          />
        </div>
      </Card>
      {status.loading === 'pending' ? <Loading/> : ''}

      {showAlert.show ?
        <Alert texto={showAlert.text} tipo={showAlert.type} onDisappear={closeAlert}/>
        : null}
    </Container>
  );
}

export default App;
