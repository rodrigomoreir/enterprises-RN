import { Dimensions, StyleSheet } from 'react-native'
import addOpacity from '../../../Utils/addOpacity'

const screenWidth = Dimensions.get('window').width

export const getStyles = () =>
  StyleSheet.create({
    container: {
      width: screenWidth-30,
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#A9A9A9',
      borderRadius: 20,
      marginBottom: 10,
      marginTop: 10
    },
    imageContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#A9A9A9'
    },
    image: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: '100%',
      width: '100%',
    },
    textContainer: {
      backgroundColor: addOpacity('#87CEFA', 0.4), 
      width: '100%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    title: {        
      fontSize: 20,
      lineHeight: 26.38,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
      alignSelf: 'center'
    },
    subtitle: {
      fontSize: 15,
      lineHeight: 26.38,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
      alignSelf: 'center'
    }
  })
