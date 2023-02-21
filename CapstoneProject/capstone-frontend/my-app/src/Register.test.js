import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Register from './Components/register/Register';



describe('Register', () => {

    it('password fields', () => {
        render(<Register />, { wrapper: BrowserRouter });
        const passwordField = screen.getByText('Password');
        const confirmPasswordField = screen.getByText('Confirm Password');
        expect(passwordField).toBeInTheDocument();
        expect(confirmPasswordField).toBeInTheDocument();
    });

    test('Email field in Login component', () => {
        render(<Register />, { wrapper: BrowserRouter });
        const usernameField = screen.getByText('Email Address');
        expect(usernameField).toBeInTheDocument();
    });

    test('Submit button in Login component', () => {
        render(<Register />, { wrapper: BrowserRouter });
        const resetButton = screen.queryByRole('Submit');
        expect(resetButton).not.toBeInTheDocument();
    });

    test('Should have div id', () => {
        render(<Register />, { wrapper: BrowserRouter });
        const divElement = screen.getByTestId('div')
        expect(divElement).toBeInTheDocument()
    })

})