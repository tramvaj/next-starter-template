import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders nav items', () => {
    render(<Header items={[{ label: 'One', href: '/one' }, { label: 'Two', href: '/two' }]} />)
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
  })
})
