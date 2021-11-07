import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import themeColors from '../../theme/theme'
import addOpacity from '../../utils/addOpacity'

export const DEFAULT_COLOR_OPACITY = 0.5

interface Props {
  color?: string
  style?: StyleProp<ViewStyle>
}

const Separator = ({ color, style }: Props) => {
  return (
    <StyledSeparator
      accessibilityLabel={'Separator'}
      style={[style, !!color && { backgroundColor: addOpacity(color, 0.5) }]}
    />
  )
}

const StyledSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${addOpacity(
  themeColors.colors.darkGrey,
  DEFAULT_COLOR_OPACITY,
)};
`

export default Separator
