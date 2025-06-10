import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el encabezado principal', () => {
  render(<App />);
  const header = screen.getByText(/Recuento de Puntos/i);
  expect(header).toBeInTheDocument();
});
