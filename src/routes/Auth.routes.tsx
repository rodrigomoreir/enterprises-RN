import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignUpScreen from '../screens/SignUpScreen'
import SignInScreen from '../screens/SignInScreen'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#ECF0F2',
      },
    }}>
    <Auth.Screen name="SignIn" component={SignInScreen} />
    <Auth.Screen name="SignUp" component={SignUpScreen} />
  </Auth.Navigator>
)

export default AuthRoutes
