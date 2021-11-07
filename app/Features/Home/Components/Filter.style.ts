import { StyleSheet } from 'react-native'
import addOpacity from '../../../Utils/addOpacity'

export const getStyles = () =>
  StyleSheet.create({
    filterButton: {
      backgroundColor: addOpacity('#87CEFA', 0.6), 
      width: 80, 
      height: 40, 
      borderRadius: 20, 
      marginTop: 8, 
      marginLeft: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textFilter: {
      fontSize: 15,
      lineHeight: 22,
      fontStyle: 'normal',
      color: '#696969',
    }
  })
