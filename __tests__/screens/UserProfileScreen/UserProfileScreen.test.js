import React from 'react'
import UserProfileScreen from '../../../src/screens/UserProfileScreen'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/functions/testing'

describe('User Profile Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<UserProfileScreen />)
  })

  test('renders correctly', () => {
    renderWithTheme(<UserProfileScreen />)
  })
})
