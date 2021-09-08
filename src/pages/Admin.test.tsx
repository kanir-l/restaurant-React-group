/* import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";
import { BookingModel } from "../models/BookingModel";
import Admin from "./Admin";
jest.mock("axios")
const mockAxios = axios as jest.Mocked<typeof axios>

const [bookings, setBookings] = useState<BookingModel[]>([])

const renderBookings = () => {
    axios.get("/admin")
    .then(res => {
    const allBookingsFromDB = res.data;
    setBookings(allBookingsFromDB);
    })
    .catch (error => {
        console.log(error)
    })
}

const mockData = bookings

test("Booking should have correct number of bookings", async () => {
    mockAxios.get.mockResolvedValue({date: mockData})
    render(<Admin />)
    await waitFor(() => {
        const bookings = screen.getAllByRole("heading")
        expect(bookings.length).toBe(mockData.length)
    })
})  */

