import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { getStyles } from './HomeScreen.style'
import { Card, Filter } from '../Components'
import { Header } from '../../../Components'
import { TextField } from '../../../Components'
import { Form } from '@unform/mobile'
import api from '../../../Services/api';
import { useAuth } from '../../../Hooks/Auth'
import { EnterpriseProps } from '../Entities'

const HomeScreen: React.FC = () => {
  const { client, token, uid } = useAuth()
  const navigation = useNavigation()
  const styles = getStyles()
  const [enterprises, setEnterprises] = useState<EnterpriseProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigateToEnterpriseDetails = (enterprise: EnterpriseProps) => {
    navigation.navigate('EnterpriseDetails', { enterprise })
  }
  const navigateToUserProfile = () => navigation.navigate('UserProfile')

  useEffect(() => {
    console.log(token, client, uid)
    console.log('executou')
    const getEnterprises = async () => {
      await api.get('enterprises', {
        headers: { 'access-token': token, 'client': client, 'uid': uid }
      }).then(response => {
        setEnterprises(response.data.enterprises)
        setLoading(false)
      }).catch(error => {
        console.log(error)
      })
    }
    getEnterprises()
  }, []) 

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Header title={'Empresas'} goProfile={navigateToUserProfile} />
      <Form onSubmit={() => {}} style={{flexDirection: 'row', }}>
        <TextField 
          name={'Pesquisar'} 
          style={styles.searchInput}
          buttonSearch={() => {}}
          placeholder={'Pesquisar'} 
          autoCorrect={false}
          onSubmitEditing={() => {
          }}
        />
          <Filter 
            filterId={enterprises.map(item => item.enterprise_type.id)} 
            filterName={enterprises.map(item=>item.enterprise_type.enterprise_type_name)}  
          />
      </Form>
      
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={styles.containerScrollView}
        contentContainerStyle={styles.contentScrollView}
      >
        {loading && (
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height - 150}}>
            <ActivityIndicator size={'large'} color={'#87CEFA'}/>
          </View>
        )}
        {enterprises.map((item, index) => (
          <Card 
          key={index}
          title={item.enterprise_name} 
          subtitle={item.enterprise_type.enterprise_type_name} 
          image={`https://empresas.ioasys.com.br/${item.photo}`}
          onPress={() => navigateToEnterpriseDetails(item)}
        />
        ))}        
        <View style={styles.container}>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen;
