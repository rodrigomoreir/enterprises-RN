import React from 'react'

// import renderer from 'react-test-renderer'
import { Form } from '@unform/mobile'

import {
  renderWithTheme,
  matchSnapshotWithTheme,
} from '../../src/functions/testing'

import TextField from '../../src/core/TextField'

describe('TextField', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(
      <Form onSubmit={() => {}}>
        <TextField name={'test'} placeholder={'test'} />
      </Form>,
    )
  })

  test('renders correctly', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <Form onSubmit={() => {}}>
        <TextField name={'test'} placeholder={'test'} onp />
      </Form>,
    )
    const textField = getByPlaceholderText('test')
    expect(textField).toBeTruthy()
  })

  test('renders correctly with button search', () => {
    const onPressMock = jest.fn()
    renderWithTheme(
      <Form onSubmit={() => {}}>
        <TextField
          name={'test'}
          placeholder={'test'}
          buttonSearch={onPressMock}
        />
      </Form>,
    )
  })
})
