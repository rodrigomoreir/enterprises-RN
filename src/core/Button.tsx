import React from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { screenWidth } from '../utils'

interface ButtonProps extends TouchableOpacityProps {
  text: string
  onPress: () => void
  isLoading: boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  isLoading,
  ...rest
}) => {
  return (
    <>
      {!isLoading ? (
        <StyledTouchableOpacity onPress={onPress} {...rest}>
          <StyledText>{text}</StyledText>
        </StyledTouchableOpacity>
      ) : (
        <ActivityIndicator />
      )}
    </>
  )
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: ${screenWidth - 100}px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`
const StyledText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`

export default Button
