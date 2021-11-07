import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Features/SignIn'
import SignUp from '../Features/SignUp'

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
      <Auth.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#ECF0F2'
          }
        }}
      >
        <Auth.Screen name="SignIn" component={SignIn.screens.SignInScreen}/>
        <Auth.Screen name="SignUp" component={SignUp.screens.SignUpScreen}/>
      </Auth.Navigator>
  )

export default AuthRoutes;
