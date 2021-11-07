import { Dimensions, StyleSheet } from 'react-native'
import addOpacity from '../Utils/addOpacity'

const screenWidth = Dimensions.get('window').width

export const getStyles = () =>
  StyleSheet.create({
    container: {
      width: screenWidth,
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      borderBottomWidth: 2,
      borderColor: '#A9A9A9',
      flexDirection: 'row',
    },
    imageContainer: {
     backgroundColor: addOpacity('#87CEFA', 0.8),
     width: 40,
     height: 40,
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 20,
     borderWidth: 1,
     borderColor: addOpacity('#696969', 0.6)
    },
    image: {
      height: 20, 
      width: 20, 
      tintColor: '#ECF0F2', 
    },
    title: {        
      fontSize: 20,
      lineHeight: 26.38,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
      textAlign: 'center',
    },
    profileContainer: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: addOpacity('#696969', 0.6)
     },
     imageProfileUser: {
      maxHeight: 38, 
      maxWidth: 38, 
      borderRadius: 20,
      tintColor: addOpacity('#87CEFA', 0.8), 
     }
  })
