import React from 'react'
import SignUpScreen from '../../../src/screens/SignUpScreen'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/functions/testing'

describe('SignUp Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<SignUpScreen />)
  })

  test('renders correctly', () => {
    renderWithTheme(<SignUpScreen />)
  })
})
