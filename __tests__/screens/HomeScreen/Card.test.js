import React from 'react'

// import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react-native'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../../src/functions/testing'

import Card from '../../../src/screens/HomeScreen/Card'

describe('Card', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(
      <Card
        title={'TEST'}
        subtitle={'SubTest'}
        image={''}
        onPress={jest.fn()}
      />,
    )
  })

  test('renders correctly', () => {
    const onPressMock = jest.fn()
    const { getByText } = renderWithTheme(
      <Card
        title={'TEST'}
        subtitle={'SubTest'}
        image={''}
        onPress={onPressMock}
      />,
    )
    const card = getByText('TEST')
    fireEvent.press(card)
    expect(onPressMock).toHaveBeenCalledTimes(1)
    expect(card).toBeTruthy()
  })
})
