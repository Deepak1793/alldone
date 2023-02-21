import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Login from './Components/login/Login';

describe('Testing Login component', () => {
  test('Demo test', () => { console.log('Test executed'); })


  test('Email field in Login component', () => {
    render(<Login />, { wrapper: BrowserRouter });
    const usernameField = screen.getByText('Email Address');
    expect(usernameField).toBeInTheDocument();
  });

  test('Password field in Login component', () => {
    render(<Login />, { wrapper: BrowserRouter });
    const passwordField = screen.getByText('Password');
    expect(passwordField).toBeInTheDocument();
  });

  test('Login button in Login component', () => {
    render(<Login />, { wrapper: BrowserRouter });
    const loginButton = screen.getByText('Sign In');
    expect(loginButton).toBeInTheDocument();
  });

  test('Login submit component renders correctly', () => {
    render(<Login />, { wrapper: BrowserRouter });
    const submitButton = screen.getByText('Sign In');
    expect(submitButton).toBeInTheDocument();
  
  });

  test('Should have div id', () => {
    render(<Login />, { wrapper: BrowserRouter });
    const divElement = screen.getByTestId('div')
    expect(divElement).toBeInTheDocument()
  })
})



export default Login;












  










