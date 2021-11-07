import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import AuthRoutes from './Auth.routes'
import AppRoutes from './App.routes'

import { useAuth } from '../Hooks/Auth'

const Routes: React.FC = () => {
    const { client, loading } = useAuth()

    if (loading) {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={'large'} color={'#87CEFA'}/>
            </View>
        )
    }

    return client ? <AppRoutes /> : <AuthRoutes />
}

export default Routes