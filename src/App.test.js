import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

global.Request = jest.fn(() => ({}));

test('that app renders very well', () => {
  render(<App />);
  const appMainElement = screen.getByTestId("nifty-task-wrapper");
  expect(appMainElement).toBeInTheDocument();
});
