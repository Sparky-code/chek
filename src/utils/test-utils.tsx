import { render } from '@testing-library/react-native'
import React from 'react'

// Temporarily simplified render function without ThemeProvider
const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, {
    ...options
  })
}

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn()
}

// Mock press events
const createPressEvent = () => ({
  nativeEvent: {
    pageX: 0,
    pageY: 0
  }
})

// Re-export everything from testing-library
export * from '@testing-library/react-native'

// Export custom utilities
export { customRender as render, mockNavigation, createPressEvent }
