import {render, screen} from "@testing-library/react";
import Alert from "../components/Alert";

test('Se muestra alert', () => {

  const texto = 'Texto de alerta';
  render(<Alert texto={texto}/>);
  const divAlert = screen.getByText(texto);
  expect(divAlert).toBeInTheDocument();
  expect(divAlert.className).toMatch('success')
});
