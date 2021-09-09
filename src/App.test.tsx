 import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router';
import {createMemoryHistory} from 'history'

// Checking Navigation in the header
test('start should go the the correct route', () => {
  const history = createMemoryHistory()
  history.push('/')
  render(
    <Router history={history}>
      <App />
    </Router>,
  )

  expect(screen.getByText(/L'Isola/i)).toBeInTheDocument()
})  

test('reservations should go the the correct route', () => {
  const history = createMemoryHistory()
  history.push('/reservations')
  render(
    <Router history={history}>
      <App />
    </Router>,
  )

  expect(screen.getByText(/reservations/i)).toBeInTheDocument()
}) 

test('admin should go the the correct route', () => {
  const history = createMemoryHistory()
  history.push('/contact')
  render(
    <Router history={history}>
      <App />
    </Router>,
  )

  expect(screen.getByText(/contact/i)).toBeInTheDocument()
})  
