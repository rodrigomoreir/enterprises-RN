import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('window').width

export const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
    searchInput: {
      height: 40, 
      borderRadius: 20, 
      marginLeft: 15,
      alignSelf: 'flex-start', 
      width: screenWidth - 115, 
      marginBottom: 0
    }
  })
