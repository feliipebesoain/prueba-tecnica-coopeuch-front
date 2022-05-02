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
import {useEffect} from "react";
import Loading from "./components/Loading";

const App = () => {
  const dispatch = useDispatch();
  const tareas = useSelector(selectTareas);
  const status = useSelector(selectStatus);

  const listarTareas = () => {
    console.log('buscando tareas');
    dispatch(buscarTareasFetchThunk())
  }

  const crearTarea = (tarea) => {
    dispatch(nuevaTareaFetchThunk(tarea, listarTareas));
  };

  const actualizarTarea = (tarea) => {
    dispatch(actualizarTareaFetchThunk(tarea, listarTareas))
  }

  const eliminarTarea = (tarea) => {
    console.log('eliminando')
    dispatch(eliminarTareaFetchThunk(tarea.identificador, listarTareas))
  }

  useEffect(() => {
    listarTareas();
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

export default App;
