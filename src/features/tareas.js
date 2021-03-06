import {asyncMac, makeAsyncTypes, makeCrudReducer, makeFetchingReducer, makeSetReducer, reduceReducers} from "./utils";
import enviroment from "../enviroments/enviroment";
import {combineReducers} from "redux";

const TAREA_ENTITY = 'tareas';

const asyncTareas = makeAsyncTypes(TAREA_ENTITY)

export const fulFilledReducer = makeSetReducer([`${TAREA_ENTITY}/fulfilled`])
export const crudReducer = makeCrudReducer(['tarea/add', 'tarea/complete'])
export const tareasReducer = reduceReducers(crudReducer, fulFilledReducer)
export const fetchingReducer = makeFetchingReducer([...asyncTareas, ``])

export const reducer = combineReducers({
  tareas: combineReducers({
    entities: tareasReducer,
    status: fetchingReducer,
  })
})

const [setPending, setFulFilled, setError] = asyncMac(asyncTareas);


const urlFetchTareas = `${enviroment.urlBack}/tareas`

/** message: mensaje ingresado al status */
export const buscarTareasFetchThunk = (message = '') => async dispatch => {
  dispatch(setPending());
  try {
    const response = await fetch(urlFetchTareas);
    const data = await response.json();
    dispatch(setFulFilled(data, message))
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const nuevaTareaFetchThunk = (tarea, listarTareasDispatch) => async dispatch => {
  dispatch(setPending());
  try {
    const response = await fetch(urlFetchTareas, {
      method: 'POST',
      body: JSON.stringify(tarea),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();

    const mensajeExito = 'Tarea creada con éxito';

    if (listarTareasDispatch) {
      listarTareasDispatch(mensajeExito);
    } else {
      dispatch(setFulFilled(data, mensajeExito))
    }
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const actualizarTareaFetchThunk = (tarea, listarTareasDispatch) => async dispatch => {
  dispatch(setPending());
  try {
    const response = await fetch(urlFetchTareas, {
      method: 'PUT',
      body: JSON.stringify(tarea),
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*'}
    });
    const data = await response.json();

    const mensajeExito = 'Tarea actualizada con éxito';

    if (listarTareasDispatch) {
      listarTareasDispatch(mensajeExito);
    } else {
      dispatch(setFulFilled(data, mensajeExito))
    }
  } catch (e) {
    dispatch(setError(e.message))
  }
}

export const eliminarTareaFetchThunk = (identificador, listarTareasDispatch) => async dispatch => {
  dispatch(setPending());
  try {
    const response = await fetch(`${urlFetchTareas}?id=${identificador}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*'}
    });

    const mensajeExito = 'Tarea eliminada con éxito';
    if (listarTareasDispatch) {
      listarTareasDispatch(mensajeExito);
    } else {
      dispatch(setFulFilled(response.ok, mensajeExito))
    }
  } catch (e) {
    dispatch(setError(e.message))
  }
}


/** Selectores */
export const selectTareas = state => {
  const {tareas: {entities}} = state
  return entities
}

export const selectStatus = state => state.tareas.status

