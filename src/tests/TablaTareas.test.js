import {fireEvent, render, screen} from "@testing-library/react";
import TablaTareas from "../components/TablaTareas";

test('Flujos de eliminar tarea', () => {

  const tareas = [{identificador: 1, descripcion: 'desc', fechaCreacion: '2022-01-01', vigente: true}];

  const onEliminarTarea = (tarea) => {
    expect(tarea.identificador).toEqual(1);
  }

  render(<TablaTareas tareas={tareas} onEliminarTarea={onEliminarTarea}/>);

  const botonBorrar = screen.getByTestId('boton-borrar');
  expect(botonBorrar).toBeInTheDocument();

  fireEvent.click(botonBorrar);

  const modal = screen.getByTestId('modal');
  expect(modal).toBeInTheDocument();

  global.fetch = jest.fn()
    .mockImplementation(() => {
      return Promise.resolve(() => ({json: async () => ({results: true})}))
    })

  /** elminar tarea */
  const botonSi = screen.getByTestId('boton-si');
  expect(botonSi).toBeInTheDocument();
  fireEvent.click(botonSi);


  fireEvent.click(botonBorrar);

  /** Cerrar modal con boton de NO */
  const botonNo = screen.getByTestId('boton-no');
  expect(botonNo).toBeInTheDocument();
  fireEvent.click(botonNo);

  /** Cerrar modal con equis (X) */
  fireEvent.click(botonBorrar);
  const botonCerrarModal = screen.getByTestId('close-modal-button');
  expect(botonCerrarModal).toBeInTheDocument();
  fireEvent.click(botonCerrarModal);


});

test('Flujos editar tarea', () => {

  const tareas = [{identificador: 1, descripcion: 'desc', fechaCreacion: '2022-01-01', vigente: true}];

  const onSaveTareaEditada = (tarea) => {
    expect(tarea).toBeDefined();
  }

  render(<TablaTareas tareas={tareas} onSaveTareaEditada={onSaveTareaEditada}/>);

  const botonEditar = screen.getByTestId('boton-editar');
  expect(botonEditar).toBeInTheDocument();

  global.fetch = jest.fn()
    .mockImplementation(() => {
      return Promise.resolve(() => ({json: async () => ({results: true})}))
    })

  fireEvent.click(botonEditar);

  /** Guardar tarea actualizada */
  const botonGuardar = screen.getByTestId('boton-guardar');
  expect(botonGuardar).toBeInTheDocument();
  fireEvent.click(botonGuardar);


  /** cancelar edicion */
  fireEvent.click(botonEditar);
  const botonCancelar = screen.getByTestId('boton-cancelar');
  expect(botonCancelar).toBeInTheDocument();
  fireEvent.click(botonCancelar);


  /** Cerrar modal con equis (X) */
  fireEvent.click(botonEditar);
  const botonCerrarModal = screen.getByTestId('close-modal-button');
  expect(botonCerrarModal).toBeInTheDocument();
  fireEvent.click(botonCerrarModal);


});
