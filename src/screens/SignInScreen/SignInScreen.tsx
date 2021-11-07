import React, { useCallback, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Platform,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native'
import styled from 'styled-components/native'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import TextField from '../../core/TextField'
import images from '../../assets'
import { Button } from '../../core'
import { getValidationErrors } from '../../utils'
import { userActions } from '../../store/slices/userSlice'
import { screenWidth } from '../../utils'

interface SignInFormData {
  email: string
  password: string
}

const SignInScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const navigateToSignUp = () => navigation.navigate('SignUp')
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().required('A senha é obrigatória.'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      setLoading(true)
      dispatch(userActions.login(data))
      setLoading(false)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)

        return
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      )
    }
  }, [])

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <StyledScrollView keyboardShouldPersistTaps="handled">
        <StyledViewContainer>
          <StyledViewImage>
            <StyledLogoImage source={images.logo} resizeMode={'contain'} />
          </StyledViewImage>
          <StyledTitle>Faça seu Login</StyledTitle>
          <StyledInputsContainer>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <TextField
                name={'email'}
                image={images.profile['20px']}
                placeholder={'E-mail'}
                keyboardType={'email-address'}
                autoCorrect={false}
                autoCapitalize={'none'}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <TextField
                ref={passwordInputRef}
                name={'password'}
                image={images.password['20px']}
                placeholder={'Senha'}
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize={'none'}
                returnKeyType={'send'}
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
            <TouchableOpacity onPress={() => {}}>
              <StyledSubtitle>Esqueci minha senha</StyledSubtitle>
            </TouchableOpacity>
          </StyledInputsContainer>
          {/* {loading ? (
            <ActivityIndicator size={'large'} color={'#87CEFA'} />
          ) : ( */}
          <Button
            text={'Entrar'}
            onPress={() => formRef.current?.submitForm()}
            isLoading={loading}
          />
          {/* )} */}
          <StyledSignUpButton onPress={navigateToSignUp}>
            <StyledTitle>Criar uma conta</StyledTitle>
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
const StyledSubtitle = styled.Text`
  align-self: center;
  font-size: 15px;
  line-height: 26.38px;
  font-style: normal;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 5px;
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
export default SignInScreen
