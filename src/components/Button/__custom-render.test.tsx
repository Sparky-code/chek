import { render, screen } from '@testing-library/react-native'
import React from 'react'

import { createButtonComponent } from './Button'

describe('Button with Custom Render', () => {
  it('renders correctly', () => {
    const Button = createButtonComponent()
    render(<Button title="Test" onPress={() => {}} accessibilityLabel="Test" />)
    expect(screen.getByText('Test')).toBeTruthy()
  })
})
