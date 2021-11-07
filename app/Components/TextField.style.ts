import { Dimensions, StyleSheet } from 'react-native'
import addOpacity from '../Utils/addOpacity'

export const getStyles = () =>
  StyleSheet.create({
    container: {
      width: Dimensions.get('window').width - 80,
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10
    },
    image: {
      marginHorizontal: 5
    },
    textInput: {
      flex: 1,
    },
    buttonSearch: {
      backgroundColor: addOpacity('#87CEFA', 0.6), 
      width: 55, 
      height: 39, 
      borderTopLeftRadius: 20, 
      borderBottomLeftRadius: 20, 
      alignItems: 'center',
      justifyContent: 'center',
      left: -6
    },
    imageButton:{
      tintColor: addOpacity('#696969', 0.8)
    }
  })
