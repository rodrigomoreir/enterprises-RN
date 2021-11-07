import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('window').width

export const getStyles = () =>
  StyleSheet.create({
    container: {
      width: screenWidth-100,
      height: 60,
      backgroundColor: '#87CEFA',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 18
    }    
  })
