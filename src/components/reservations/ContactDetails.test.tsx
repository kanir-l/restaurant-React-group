import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContactDetails from './ContactDetails';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test("Show form", () => {
    let mockFunction = jest.fn()
    render(<ContactDetails submitRedirectUrl="/" contactDetails={mockFunction}></ContactDetails>)

    let firstName = screen.getByPlaceholderText(/First Name/i)
    let lastName = screen.getByPlaceholderText(/Last Name/i)
    let phone = screen.getByPlaceholderText(/Phone number/i)
    let email = screen.getByPlaceholderText(/Email address/i)
    let specialRequest = screen.getByPlaceholderText(/Message\.\.\./i)
    let button = screen.getByText(/Confirm reservation/i)

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(phone).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(specialRequest).toBeInTheDocument()
    expect(button).toBeInTheDocument()
})

test("Send Values from form", () => {
    let mockFunction = jest.fn()
    let mockLink = "http://localhost:3000/reservations/confirmation"
    render(<ContactDetails contactDetails={mockFunction} submitRedirectUrl={mockLink}></ContactDetails>)

    let firstName = screen.getByPlaceholderText(/First Name/i)
    let lastName = screen.getByPlaceholderText(/Last Name/i)
    let phone = screen.getByPlaceholderText(/Phone number/i)
    let email = screen.getByPlaceholderText(/Email address/i)
    let specialRequest = screen.getByPlaceholderText(/Message\.\.\./i)
    let button = screen.getByText(/Confirm reservation/i)

    fireEvent.change(firstName, {target: { name: 'firstName', value: 'Jane'}})
    fireEvent.change(lastName, {target: { name: 'lastName', value: 'Doe'}})
    fireEvent.change(phone, {target: { name: 'phone', value: '0123456789'}})
    fireEvent.change(email, {target: { name: 'email', value: 'info@janedoe.com'}})
    fireEvent.change(specialRequest, {target: { name: 'specialRequest', value: 'VIP room'}})

    fireEvent.click(button);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith('Jane', 'Doe', '0123456789', 'info@janedoe.com', 'VIP room')
})  