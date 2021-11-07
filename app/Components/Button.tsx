import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { getStyles } from './Button.style';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onPress,  ...rest }) => { 
  const styles = getStyles()
  
  return(
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
)};

export default Button;