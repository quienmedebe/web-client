import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test.todo('Renders the Splash screen without crashing');
test.todo('Renders the App default page without being logged without crashing');
test.todo('Renders the App default page being logged without crashing');

test.todo('Renders the App error page if an error in App component happens');
test.todo('The app error page has a button to reload the app going to the home page');
