import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  Text, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Form } from '@unform/mobile'
import { getStyles } from './SignUpScreen.style'
import TextField from '../../../Components/TextField'
import { Button } from '../../../Components';
import images from '../../../Themes/Images'

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation()
  const styles = getStyles()

  const navigateToSignUp = () => navigation.navigate('SignIn')

  return (
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
            <Image source={images.logo} />
          </View>
          <Text style={styles.title}>Faça seu cadastro</Text>
          <View style={styles.inputsContainer}>       
          <Form onSubmit={() => {}}>   
            <TextField name={'name'} image={images.profile['20px']} placeholder={'Nome'} />
            <TextField name={'email'} image={images.profile['20px']} placeholder={'E-mail'} />
            <TextField 
              name={'senha'} 
              image={images.password['20px']} 
              placeholder={'Senha'} 
              secureTextEntry={true}
            />
          </Form>
          </View>
          <Button text={'Cadastrar'} onPress={() => {}}/>
          <TouchableOpacity style={styles.accessAccount} onPress={navigateToSignUp}>
            <Text style={styles.title}>Acessar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreen;
