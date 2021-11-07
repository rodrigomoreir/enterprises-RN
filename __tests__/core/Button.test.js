import React from 'react'

// import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react-native'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../src/functions/testing'

import Button from '../../src/core/Button'

describe('Button', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<Button text={'TEST'} />)
  })

  test('renders correctly', () => {
    const onPressMock = jest.fn()
    const { getByText } = renderWithTheme(
      <Button onPress={onPressMock} text={'Press me'} />,
    )
    const button = getByText('Press me')
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalledTimes(1)
    expect(button).toBeTruthy()
  })

  test('render button with loading', () => {
    renderWithTheme(<Button onPress={jest.fn()} isLoading text={'Press me'} />)
  })
})
