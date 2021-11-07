import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView } from 'react-native';
import { getStyles } from './UserProfileScreen.style'
import { Button, Header } from '../../../Components'
import { useAuth } from '../../../Hooks/Auth'
import { Separator } from '../Components';
import images from '../../../Themes/Images';

const UserProfile: React.FC = () => {
  const navigation = useNavigation()
  const styles = getStyles()
  const navigationGoBack = () => navigation.goBack()

  const { signOut } = useAuth()

  return (
    <>
      <Header title={'Usuário'} goProfile={() => {}} goBack={navigationGoBack} />
      <ScrollView
        keyboardShouldPersistTaps='handled'
        style={styles.containerScrollView}
        contentContainerStyle={styles.contentScrollView}
      >   
        <View style={styles.container}>
          <View style={styles.imageContainer}>  
            <Image source={images.profileUser} style={styles.image} />
          </View>
          <Text style={styles.itemText}>Minhas Informações</Text>
          <Separator style={styles.separator}/>
          <Text style={styles.itemText}>Editar Cadastro</Text>
          <Separator style={styles.separator}/>
          <Text style={styles.itemText}>Empresa</Text>
          <Separator style={styles.separator}/>
          <Text style={styles.itemText}>Saldo</Text>
          <Separator style={styles.separator}/>
          <Text style={styles.itemText}>Valor do Portifolio</Text>
          <Separator style={styles.separator}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button text={'Sair'} onPress={signOut} />
        </View>
      </ScrollView>
    </>
  )
}

export default UserProfile;
