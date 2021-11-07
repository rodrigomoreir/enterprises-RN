import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import AuthRoutes from './Auth.routes'
import AppRoutes from './App.routes'

// import { useAuth } from '../Hooks/Auth'

const Routes: React.FC = () => {
  // const { client, loading } = useAuth()
  const userData = useSelector(state => state.user.data)
  const loading = useSelector(state => state.user.loading)
  console.log(userData)

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} color={'#87CEFA'} />
      </View>
    )
  }

  return userData?.client ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
