import React from 'react'
import EnterpriseDetailsScreen from '../../../src/screens/EnterpriseDetailsScreen/EnterpriseDetailsScreen'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/functions/testing'

describe('Enterprise Details Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<EnterpriseDetailsScreen />)
  })

  test('renders correctly', () => {
    renderWithTheme(<EnterpriseDetailsScreen />)
  })
})
