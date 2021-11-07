import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  Text, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity, 
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Yup from 'yup'
import { useAuth } from '../../../Hooks/Auth'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { getStyles } from './SignInScreen.style'
import TextField from '../../../Components/TextField'
import images from '../../../Themes/Images'
import { Button } from '../../../Components';
import { getValidationErrors } from '../../../Utils'

interface SignInFormData {
  email: string
  password: string
}

const SignInScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const styles = getStyles()
  const navigateToSignUp = () => navigation.navigate('SignUp')
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().required('A senha é obrigatória.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLoading(true)
      await signIn({ email: data.email, password: data.password });
      setLoading(false)

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      );
    }
  }, [signIn]);

  return (
    <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={styles.containerScrollView}
        contentContainerStyle={styles.contentScrollView}
      >       
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={images.logo} style={styles.image} resizeMode={'contain'} />
        </View>
        <Text style={styles.title}>Faça seu Login</Text>
          <View style={styles.inputsContainer}>          
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
              <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
          {loading ? (
              <ActivityIndicator size={'large'} color={'#87CEFA'}/>
          ) : (
            <Button text={'Entrar'} onPress={() => formRef.current?.submitForm()}/>
          )}
        <TouchableOpacity style={styles.createAccount} onPress={navigateToSignUp}>
          <Text style={styles.title}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </>
  )
}

export default SignInScreen;
