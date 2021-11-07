import React from 'react'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/functions/testing'

import Contacts from '../../../src/screens/EnterpriseDetailsScreen/Contacts'

describe('Contacts', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(
      <Contacts meansOfContact={'TEST'} contact={'test'} />,
    )
  })

  test('renders correctly', () => {
    renderWithTheme(<Contacts meansOfContact={'TEST'} contact={'test'} />)
  })
})
