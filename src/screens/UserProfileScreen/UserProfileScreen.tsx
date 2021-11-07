import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import styled from 'styled-components/native'
import { Button, Header } from '../../core'
import Separator from './Separator'
import images from '../../assets'
import { screenWidth } from '../../utils'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/slices/userSlice'

const UserProfile: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const navigationGoBack = () => navigation.goBack()

  const signOut = () => {
    dispatch(userActions.logout())
  }

  return (
    <StyledSafeAreaView>
      <Header
        title={'Usuário'}
        goProfile={() => { }}
        goBack={navigationGoBack}
      />
      <StyledScrollView keyboardShouldPersistTaps="handled" bounces={false}>
        <StyledViewContainer>
          <StyledViewImage>
            <StyledImage source={images.profileUser} />
          </StyledViewImage>
          <StyledTextItem>Minhas Informações</StyledTextItem>
          <StyledSeparator />
          <StyledTextItem>Editar Cadastro</StyledTextItem>
          <StyledSeparator />
          <StyledTextItem>Empresa</StyledTextItem>
          <StyledSeparator />
          <StyledTextItem>Saldo</StyledTextItem>
          <StyledSeparator />
          <StyledTextItem>Valor do Portifolio</StyledTextItem>
          <StyledSeparator />
        </StyledViewContainer>
        <StyledViewButton>
          <Button text={'Sair'} onPress={() => signOut()} />
        </StyledViewButton>
      </StyledScrollView>
    </StyledSafeAreaView>
  )
}

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`
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
const StyledViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const StyledViewImage = styled.View`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`
const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  tint-color: ${({ theme }) => theme.colors.blue};
`
const StyledTextItem = styled.Text`
  align-self: center;
  margin-vertical: 10px;
  font-weight: bold;
  font-size: 20px;
  line-height: 26.38px;
  font-style: normal;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
`
const StyledSeparator = styled(Separator)`
  width: ${screenWidth - 50}px;
`
const StyledViewButton = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export default UserProfile
