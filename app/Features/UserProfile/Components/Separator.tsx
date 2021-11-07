import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import addOpacity from '../../../Utils/addOpacity'

export const DEFAULT_COLOR_OPACITY = 0.5

interface Props {
  color?: string
  style?: StyleProp<ViewStyle>
}

const Separator = ({ color, style }: Props) => {
  const styles = getStyles()
  return (
    <View
      accessibilityLabel={'Separator'}
      style={[styles.mainContainer, style, !!color && { backgroundColor: addOpacity(color, 0.5) }]}
    />
  )
}

export const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      height: 1,
      backgroundColor: addOpacity('#696969', DEFAULT_COLOR_OPACITY),
      width: '100%'
    }
  })

export default Separator
