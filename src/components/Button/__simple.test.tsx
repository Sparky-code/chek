import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { Button } from './Button'

describe('Button simple test', () => {
  it('renders correctly', () => {
    render(<Button title="Test" onPress={() => {}} accessibilityLabel="Test" />)
    expect(screen.getByText('Test')).toBeTruthy()
  })
})
