import React, { 
  useEffect, 
  useRef, 
  useImperativeHandle, 
  forwardRef, 
  useState, 
  useCallback 
} from 'react';
import { 
  View, 
  TextInput, 
  Image, 
  TextInputProps, 
  ViewStyle, 
  StyleProp, 
  TouchableOpacity 
} from 'react-native';
import { getStyles } from './TextField.style'
import { useField } from '@unform/core'
import images from '../Themes/Images';

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

const TextField: React.RefForwardingComponent<InputRef,Props> = ({ style, image, placeholder, name, buttonSearch, ...rest }, ref ) => {
  const styles = getStyles()
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
    }
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
      }
    })
  }, [fieldName, registerField])

  return (
    <View style={[
      styles.container, 
      style, 
      isFocused && {borderColor: '#87CEFA'}, 
      !!error && {borderColor: '#C53030'}
    ]}>
      {buttonSearch ? (
        <TouchableOpacity style={styles.buttonSearch} onPress={buttonSearch}>
          <Image source={images.search['24px']} style={styles.imageButton} />
        </TouchableOpacity>
      ) : (
        <Image source={image} style={styles.image} />
      )}
      <TextInput 
        ref={inputElementRef}
        style={styles.textInput} 
        placeholder={placeholder}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        {...rest}
      ></TextInput>       
    </View>
       
  )
}

export default forwardRef(TextField);
