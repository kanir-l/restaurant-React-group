/* import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Admin from './Admin';
import axios from 'axios';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

interface IBooking {
    numberOfGuests: number,
    date: string,
    time: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    specialRequest: string
}

const mockData: IBooking[] = [
    {
        numberOfGuests: 6,
        date: "Fri 10 Aug 2021",
        time: "18",
        firstName: "Jane",
        lastName: "Doe",
        phone: "0123456789",
        email: "info@janedoe.com",
        specialRequest: "I would like to ask for a none-smoking corner"
    },
    {
        numberOfGuests: 6,
        date: "Sat 14 Aug 2021",
        time: "21",
        firstName: "John",
        lastName: "Doe",
        phone: "098765432",
        email: "info@johndoe.com",
        specialRequest: "I would like to have a seaview side"
    }
]

test("render the bookings", async () => {
    mockAxios.get.mockResolvedValue({ date: mockData })

    render(<Admin />)

    await waitFor(() => {
        let theP = screen.getByRole('paragraph')

        expect(theP.length).toBe(mockData.length)
    })
})    */

