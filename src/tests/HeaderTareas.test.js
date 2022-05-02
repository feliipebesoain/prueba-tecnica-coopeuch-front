import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import HeaderTareas from "../components/HeaderTareas";

test('Se muestra header, se muestra modal, se cancela y luego se crea una tarea', () => {

  const descripcion = 'descripcion tarea';
  const onGuardarTarea = (tarea) => {
    expect(tarea.descripcion).toEqual(descripcion);
  }

  render(<HeaderTareas onGuardarTarea={onGuardarTarea}/>);

  const botonCrear = screen.getByTestId('boton-crear');
  expect(botonCrear).toBeInTheDocument();

  fireEvent.click(botonCrear);
  const modal = screen.getByTestId('modal');
  expect(modal).toBeInTheDocument()

  const botonCancelarCrear = screen.getByTestId('boton-cancelar');
  expect(botonCancelarCrear).toBeInTheDocument()
  fireEvent.click(botonCancelarCrear);

  /** Validar que el modal ya no esté visible */
  expect(modal).not.toBeInTheDocument();

  fireEvent.click(botonCrear);
  const inputDescripcion = screen.getByTestId('descripcion-input');
  expect(inputDescripcion).toBeInTheDocument();

  fireEvent.input(inputDescripcion, {target: {value: descripcion}});

  const botonGuardar = screen.getByTestId('boton-guardar');
  expect(botonGuardar).toBeInTheDocument();

  fireEvent.click(botonGuardar)

});
