import React from 'react'

// import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react-native'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../src/functions/testing'

import Header from '../../src/core/Header'

describe('Header', () => {
  test('matches snapshot', () => {
    const onPressMock = jest.fn()
    matchSnapshotWithTheme(<Header title={'TEST'} goProfile={onPressMock} />)
  })

  test('renders correctly', () => {
    const onPressMock = jest.fn()
    const { getByText } = renderWithTheme(
      <Header title={'TEST'} goProfile={onPressMock} />,
    )
    const header = getByText('TEST')
    expect(header).toBeTruthy()
  })

  test('render header with goBack', () => {
    const goBackMock = jest.fn()
    renderWithTheme(
      <Header
        goProfile={jest.fn()}
        goBack={goBackMock}
        isLoading
        title={'TEST'}
      />,
    )
  })
})
