import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Features/Home'
import EnterpriseDetails from '../Features/EnterpriseDetails'
import UserProfile from '../Features/UserProfile'

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
      <App.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#ECF0F2'
          }
        }}
      >
        <App.Screen name="Home" component={Home.screens.HomeScreen}/>
        <App.Screen name="EnterpriseDetails" component={EnterpriseDetails.screens.EnterpriseDetailsScreen}/>
        <App.Screen name="UserProfile" component={UserProfile.screens.UserProfileScreen}/>
      </App.Navigator>
  )

export default AppRoutes;
