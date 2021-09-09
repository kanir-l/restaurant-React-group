/* import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContactDetails from './ContactDetails';

test("Show form", () => {
    let mockFunction = jest.fn()
    render(<ContactDetails contactDetails={mockFunction}></ContactDetails>)

    screen.debug()

    let firstName = screen.getAllByPlaceholderText(/first Name/i)
    let lastName = screen.getAllByPlaceholderText(/last Name/i)
    let phone = screen.getAllByPlaceholderText(/phone number/i)
    let email = screen.getAllByPlaceholderText(/email address/i)
    let specialRequest = screen.getAllByPlaceholderText(/Message.../i)
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

    screen.debug()

    let firstName = screen.getByPlaceholderText(/first Name/i)
    let lastName = screen.getByPlaceholderText(/last Name/i)
    let phone = screen.getByPlaceholderText(/phone number/i)
    let email = screen.getByPlaceholderText(/email address/i)
    let specialRequest = screen.getByPlaceholderText(/Message.../i)
    let button = screen.getByText(/Confirm reservation/i)

    fireEvent.change(firstName, {target: { name: 'firstName', value: 'Jane'}})
    fireEvent.change(lastName, {target: { name: 'lastName', value: 'Doe'}})
    fireEvent.change(phone, {target: { name: 'phone', value: '0123456789'}})
    fireEvent.change(email, {target: { name: 'email', value: 'info@janedoe.com'}})
    fireEvent.change(specialRequest, {target: { name: 'specialRequest', value: 'VIP room'}})

    fireEvent.click(button);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith({firstName: 'Jane', lastName: 'Doe', phone: '0123456789', email: 'info@janedoe.com', specialRequest: 'VIP room'})
}) */