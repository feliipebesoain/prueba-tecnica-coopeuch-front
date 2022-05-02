import {render, screen, waitFor} from '@testing-library/react';
import App from '../App';
import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "../features/tareas";
import {asyncMiddleware} from "../middleware/async";

test('renders learn react link', async () => {
  const tareas = [{identificador: 1, descripcion: 'desc', fechaCreacion: '2022-01-01', vigente: true}];

  global.fetch = jest.fn()
    .mockImplementation(() => {
      return Promise.resolve(() => ({json: async () => ({results: tareas})}))
    })

  const store = configureStore({reducer, middleware: [asyncMiddleware]});

  render(<Provider store={store}><App/></Provider>);

  const botonCrearHeader = screen.getByTestId('boton-crear');
  expect(botonCrearHeader).toBeInTheDocument();

})
