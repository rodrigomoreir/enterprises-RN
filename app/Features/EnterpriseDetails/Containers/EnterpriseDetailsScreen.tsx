import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  ScrollView,
  Text,
  Image
} from 'react-native';
import { useRoute } from '@react-navigation/core';
import { getStyles } from './EnterpriseDetailsScreen.style'
import { Header } from '../../../Components'
import { EnterpriseProps } from '../../Home/Entities'

interface Params {
  enterprise: EnterpriseProps
}

const EnterpriseDetailsScreen: React.FC = () => {
  const navigation = useNavigation()
  const styles = getStyles()
  const route = useRoute()
  const { enterprise } = route.params as Params

  const navigateToHome = () => navigation.goBack()
  const navigateToUserProfile = () => navigation.navigate('UserProfile')

  return (
    <>
      <Header title={'Detalhes'} goBack={navigateToHome} goProfile={navigateToUserProfile} />
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={styles.containerScrollView}
        contentContainerStyle={styles.contentScrollView}
      >
        <Text style={styles.title}>
          {enterprise.enterprise_name} - {enterprise.enterprise_type.enterprise_type_name}
        </Text>
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: `https://empresas.ioasys.com.br/${enterprise.photo}`}} 
            style={styles.image} 
          />
        </View>       
        <View style={styles.containerText}>
          <Text style={styles.description}>{enterprise.description}</Text>
          <Text style={styles.location}>{enterprise.city} - {enterprise.country}</Text>
          <View style={styles.contactContainer}>
            <Text style={styles.email}>E-mail: </Text>
            <Text style={styles.textContact}>
              {enterprise.email_enterprise ? 
                `${enterprise.email_enterprise} 📩` : 'Não informado. 😢' 
              }
            </Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.email}>Telefone: </Text>
            <Text style={styles.textContact}>
              {enterprise.email_enterprise ? 
                `${enterprise.phone} 📲` : 'Não informado. 😢' 
              }
            </Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.email}>Facebook: </Text>
            <Text style={styles.textContact}>
              {enterprise.email_enterprise ? 
                `${enterprise.phone} 📲` : 'Não informado. 😢' 
              }
            </Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.email}>Twitter: </Text>
            <Text style={styles.textContact}>
              {enterprise.email_enterprise ? 
                `${enterprise.phone} 📲` : 'Não informado. 😢' 
              }
            </Text>
          </View>
          <View style={[styles.contactContainer, {marginBottom: 15}]}>
            <Text style={styles.email}>LinkedIn: </Text>
            <Text style={styles.textContact}>
              {enterprise.email_enterprise ? 
                `${enterprise.phone} 📲` : 'Não informado. 😢' 
              }
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default EnterpriseDetailsScreen;
