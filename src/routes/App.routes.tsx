import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import EnterpriseDetailsScreen from '../screens/EnterpriseDetailsScreen'
import UserProfileScreen from '../screens/UserProfileScreen'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#ECF0F2',
      },
    }}>
    <App.Screen name="Home" component={HomeScreen} />
    <App.Screen name="EnterpriseDetails" component={EnterpriseDetailsScreen} />
    <App.Screen name="UserProfile" component={UserProfileScreen} />
  </App.Navigator>
)

export default AppRoutes
