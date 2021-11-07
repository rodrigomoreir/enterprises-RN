import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('window').width

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      paddingTop: 80,
    },
    title: {
      fontSize: 20,
      lineHeight: 26.38,
      fontStyle: 'normal',
      fontWeight: 'bold',
      color: '#696969',
      alignSelf: 'center'
    },
    inputsContainer: {
      flex: 1,
      paddingVertical: 20
    },
    forgotPassword: {
      alignSelf: 'center',
      fontSize: 16,
      lineHeight: 26.38,
      fontStyle: 'normal',
      color: '#696969',
      marginTop: 5
    },
    inputContainer: {
      width: screenWidth - 80,
    },
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
      marginVertical: 25
    },
    accessAccount: {
      marginTop: 25,
      height: 60,
      width: screenWidth,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 2,
      borderColor: '#A9A9A9'
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
  })
