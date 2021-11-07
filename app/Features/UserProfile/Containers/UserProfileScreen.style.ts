import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('window').width

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerScrollView: {
      width: screenWidth
    },
    contentScrollView: {
      flexGrow: 1,
      width: screenWidth,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    imageContainer: {
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30
    },
    image: {
      width: '100%',
      height: '100%',
      tintColor: '#87CEFA'
    },
    itemText: {
      alignSelf: 'center',
      marginVertical: 10,
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 26.38,
      fontStyle: 'normal',
      color: '#696969',
      textAlign: 'center',
    },
    separator: {
      width: screenWidth - 50
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  })
