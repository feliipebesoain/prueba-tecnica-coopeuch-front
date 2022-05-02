import {fireEvent, render, screen} from "@testing-library/react";
import FormularioTarea from "../components/FormularioTarea";

test('Formulario de editar (con una tarea como valor inicial)', () => {

  const tareaInicial = {identificador: 1, descripcion: 'desc', fechaCreacion: '2022-05-02', vigente: false};

  const guardarTarea = (tarea) => {
    expect(tarea.identificador).toEqual(tareaInicial.identificador);
  }

  render(<FormularioTarea tarea={tareaInicial} onClickGuardar={guardarTarea}/>);

  const descripcion = screen.getByTestId('descripcion-input');
  expect(descripcion.value).toEqual(tareaInicial.descripcion);

  const checkboxVigente = screen.getByTestId('checkbox-vigente');
  fireEvent.click(checkboxVigente);
  expect(checkboxVigente.checked).toEqual(!tareaInicial.vigente);

  const botonGuardar = screen.getByTestId('boton-guardar');
  expect(botonGuardar).toBeInTheDocument();
  fireEvent.click(botonGuardar);

});

test('Formulario con nueva tarea y error al intentar guardar', () => {

  /** esta funcion no deberia ser llamada */
  const guardarTarea = () => {
    throw new Error();
  }

  render(<FormularioTarea onClickGuardar={guardarTarea}/>);

  const botonGuardar = screen.getByTestId('boton-guardar');
  expect(botonGuardar).toBeInTheDocument();

  fireEvent.click(botonGuardar);

});
