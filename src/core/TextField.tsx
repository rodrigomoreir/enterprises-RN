import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react'
import { TextInputProps, ViewStyle, StyleProp } from 'react-native'
import styled from 'styled-components/native'
import { screenWidth } from '../utils'
import addOpacity from '../utils/addOpacity'
import { useField } from '@unform/core'
import images from '../assets'
import themeColors from '../theme/theme'

interface Props extends TextInputProps {
  image?: Object
  placeholder?: string
  name: string
  style?: StyleProp<ViewStyle>
  buttonSearch?: () => void
}

interface InputValueProps {
  value: string
}

interface InputRef {
  focus(): void
}

const TextField: React.RefForwardingComponent<InputRef, Props> = (
  { style, image, placeholder, name, buttonSearch, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null)
  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueProps>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <StyledContainer
      style={[
        style,
        isFocused && { borderColor: themeColors.colors.blue },
        !!error && { borderColor: themeColors.colors.red },
        ,
      ]}>
      {buttonSearch ? (
        <StyledViewSearch onPress={buttonSearch}>
          <StyledImageButton source={images.search['24px']} />
        </StyledViewSearch>
      ) : (
        <StyledImage source={image} />
      )}
      <StyledTextInput
        ref={inputElementRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </StyledContainer>
  )
}

const StyledContainer = styled.View`
  width: ${screenWidth - 80}px;
  height: 50px;
  border-color: ${({ theme }) => theme.colors.darkGrey};
  border-width: 1px;
  border-radius: 10px;
  padding-horizontal: 5px;
  flex-direction: row;
  align-items: center;
  margin-vertical: 10px;
`

const StyledViewSearch = styled.TouchableOpacity`
  background-color: ${addOpacity(themeColors.colors.blue, 0.6)};
  width: 55px;
  height: 39px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  align-items: center;
  justify-content: center;
  left: -6px;
`
const StyledImageButton = styled.Image`
  tint-color: ${addOpacity(themeColors.colors.darkGrey, 0.8)};
`
const StyledImage = styled.Image`
  margin-horizontal: 5px;
`
const StyledTextInput = styled.TextInput`
  flex: 1;
`

export default forwardRef(TextField)
