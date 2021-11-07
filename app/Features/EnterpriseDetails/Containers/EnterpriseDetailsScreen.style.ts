import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('window').width

export const getStyles = () =>
  StyleSheet.create({    
    containerScrollView: {
      width: screenWidth
    },
    contentScrollView: {
      flexGrow: 1,
      width: screenWidth,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    title: {
      marginTop: 10,
      fontSize: 20,
      lineHeight: 26.38,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
      textAlign: 'center',
    },
    imageContainer: {
      marginTop: 10,
      width: screenWidth - 30,
      height: 250,
      borderRadius: 20
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 20
    },
    containerText: {
      flex: 1,
      width: screenWidth - 33,
      alignItems: 'center',
    },
    description: {
      marginTop: 10,
      fontSize: 15,
      lineHeight: 22,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
      textAlign: 'justify'
    },
    location: {
      marginBottom: 10,
      fontSize: 15,
      lineHeight: 22,
      fontStyle: 'normal',
      color: '#696969',
      alignSelf: 'center'
    },
    email: {
      marginTop: 10,
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
      alignSelf: 'flex-start'
    },
    contactContainer: {
      flexDirection: 'row', 
      alignItems: 'flex-end',
    },
    textContact: {
      fontSize: 15,
      lineHeight: 22,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
    }
  })
