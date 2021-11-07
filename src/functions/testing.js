import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react-native'

import ThemeProvider from '../core/ThemeProvider'
import theme from '../theme/theme'

export const matchSnapshotWithTheme = component => {
  const tree = renderer
    .create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
    .toJSON()
  expect(tree).toMatchSnapshot()
}

export const renderWithTheme = (component, options) => {
  return render(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>,
    options,
  )
}
