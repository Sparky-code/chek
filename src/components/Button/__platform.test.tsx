import { render, screen } from '@testing-library/react-native'
import React from 'react'
import { Platform } from 'react-native'

import { createButtonComponent } from './Button'

// Mock Platform at the top
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'web',
  select: (obj: any) => obj.web
}))

describe('Button platform tests', () => {
  it('renders on iOS', () => {
    Platform.OS = 'ios'
    const Button = createButtonComponent()
    render(<Button title="Test" onPress={() => {}} accessibilityLabel="Test" />)
    expect(screen.getByText('Test')).toBeTruthy()
  })

  it('renders on Android', () => {
    Platform.OS = 'android'
    const Button = createButtonComponent()
    render(<Button title="Test" onPress={() => {}} accessibilityLabel="Test" />)
    expect(screen.getByText('Test')).toBeTruthy()
  })
})
