import React from 'react'
import SignInScreen from '../../../src/screens/SignInScreen'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/functions/testing'

describe('SignIn Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<SignInScreen />)
  })

  test('renders correctly', () => {
    renderWithTheme(<SignInScreen />)
  })
})
