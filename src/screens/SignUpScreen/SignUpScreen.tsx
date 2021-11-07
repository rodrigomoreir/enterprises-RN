import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native'

import styled from 'styled-components/native'
import { screenWidth } from '../../utils'

import { Form } from '@unform/mobile'
import TextField from '../../core/TextField'
import { Button } from '../../core'
import images from '../../assets'

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation()

  const navigateToSignUp = () => navigation.navigate('SignIn')

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <StyledScrollView keyboardShouldPersistTaps="handled">
        <StyledViewContainer>
          <StyledViewImage>
            <StyledLogoImage source={images.logo} resizeMode={'contain'} />
          </StyledViewImage>
          <StyledTitle>Faça seu cadastro</StyledTitle>
          <StyledInputsContainer>
            <Form onSubmit={() => {}}>
              <TextField
                name={'name'}
                image={images.profile['20px']}
                placeholder={'Nome'}
              />
              <TextField
                name={'email'}
                image={images.profile['20px']}
                placeholder={'E-mail'}
              />
              <TextField
                name={'senha'}
                image={images.password['20px']}
                placeholder={'Senha'}
                secureTextEntry={true}
              />
            </Form>
          </StyledInputsContainer>
          <Button text={'Cadastrar'} onPress={() => {}} />
          <StyledSignUpButton onPress={navigateToSignUp}>
            <StyledTitle>Acessar conta</StyledTitle>
          </StyledSignUpButton>
        </StyledViewContainer>
      </StyledScrollView>
    </StyledKeyboardAvoidingView>
  )
}

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
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
`
const StyledViewImage = styled.View`
  flex: 1;
  padding-top: 80px;
  width: ${screenWidth - 50}px;
`

const StyledLogoImage = styled.Image`
  width: 100%;
`

const StyledTitle = styled.Text`
  font-size: 20px;
  line-height: 26.38px;
  font-style: normal;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  align-self: center;
`
const StyledInputsContainer = styled.View`
  flex: 1;
  padding-vertical: 20px;
`
const StyledSignUpButton = styled.TouchableOpacity`
  margin-top: 25px;
  height: 60px;
  width: ${screenWidth}px;
  align-items: center;
  justify-content: center;
  border-top-width: 2px;
  border-color: ${({ theme }) => theme.colors.grey};
`

export default SignUpScreen
