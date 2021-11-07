import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'

import { useRoute } from '@react-navigation/core'

import { Header } from '../../core'
import { EnterpriseProps } from '../HomeScreen/Entities'
import Contacts from './Contacts'
import { screenWidth } from '../../utils'

import styled from 'styled-components/native'

interface Params {
  enterprise: EnterpriseProps
}

const EnterpriseDetailsScreen: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { enterprise } = route.params as Params

  const navigateToHome = () => navigation.goBack()
  const navigateToUserProfile = () => navigation.navigate('UserProfile')

  console.log('EnterpriseDetails rendered')

  return (
    <SafeAreaView>
      <Header
        title={'Detalhes'}
        goBack={navigateToHome}
        goProfile={navigateToUserProfile}
      />
      <StyledScrollView keyboardShouldPersistTaps="handled" bounces={false}>
        <StyledTitle>
          {enterprise.enterprise_name} -{' '}
          {enterprise.enterprise_type.enterprise_type_name}
        </StyledTitle>
        <StyledViewImage>
          <StyledImage
            source={{
              uri: `https://empresas.ioasys.com.br/${enterprise.photo}`,
            }}
          />
        </StyledViewImage>
        <StyledEnterpriseDescription>
          <StyledTextDescription>
            {enterprise.description}
          </StyledTextDescription>
          <StyledTextLocation>
            {enterprise.city} - {enterprise.country}
          </StyledTextLocation>
          <Contacts
            meansOfContact={'E-mail: '}
            contact={
              enterprise.email_enterprise
                ? `${enterprise.email_enterprise}`
                : 'Não informado. 😢'
            }
          />
          <Contacts
            meansOfContact={'Telefone: '}
            contact={
              enterprise.phone ? `${enterprise.phone}` : 'Não informado. 😢'
            }
          />
          <Contacts
            meansOfContact={'Facebook: '}
            contact={
              enterprise.facebook
                ? `${enterprise.facebook}`
                : 'Não informado. 😢'
            }
          />
          <Contacts
            meansOfContact={'Twitter: '}
            contact={
              enterprise.twitter ? `${enterprise.twitter}` : 'Não informado. 😢'
            }
          />
          <Contacts
            meansOfContact={'LinkedIn: '}
            contact={
              enterprise.linkedin
                ? `${enterprise.linkedin}`
                : 'Não informado. 😢'
            }
          />
        </StyledEnterpriseDescription>
      </StyledScrollView>
    </SafeAreaView>
  )
}

const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})`
  width: ${screenWidth}px;
`
const StyledTitle = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  line-height: 26.38px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
`
const StyledViewImage = styled.View`
  margin-top: 10px;
  width: ${screenWidth - 30}px;
  height: 250px;
  border-radius: 20px;
`

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`

const StyledEnterpriseDescription = styled.View`
  flex: 1;
  width: ${screenWidth - 33}px;
  align-items: center;
`
const StyledTextDescription = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  line-height: 22px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: justify;
`
const StyledTextLocation = styled.Text`
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 22px;
  font-style: normal;
  color: ${({ theme }) => theme.colors.darkGrey};
  align-self: center;
`

export default EnterpriseDetailsScreen
