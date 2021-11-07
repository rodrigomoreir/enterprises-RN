import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from 'react-native'
import styled from 'styled-components/native'
import { enterpriseActions } from '../../store/slices/enterpriseSlice'
import Card from './Card'
import { Header } from '../../core'
import { TextField } from '../../core'
import { Form } from '@unform/mobile'
import { EnterpriseProps } from './Entities'
import { screenWidth, screenHeight } from '../../utils'

const HomeScreen: React.FC = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const userData = useSelector(state => state.user.data)

  const {
    data: enterpriseData,
    error: isError,
    isLoading: isLoading,
  } = useSelector(data => data.enterprise)
  const hasData = enterpriseData.length

  const navigateToEnterpriseDetails = (enterprise: EnterpriseProps) => {
    navigation.navigate('EnterpriseDetails', { enterprise })
  }
  const navigateToUserProfile = () => navigation.navigate('UserProfile')

  const searchEnterprise = (filter: string) => {
    const type = parseInt(filter)

    if (type < 30) {
      const filters = {
        headers: userData,
        filter: type,
      }
      dispatch(enterpriseActions.getEnterprisesDataFilteredType(filters))
    }
    const filters = {
      headers: userData,
      filter,
    }
    dispatch(enterpriseActions.getEnterprisesDataFiltered(filters))
  }

  useEffect(() => {
    dispatch(enterpriseActions.getEnterprisesData(userData))
  }, [dispatch, userData])

  console.log('Home rendered')

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <SafeAreaView>
        <Header title={'Empresas'} goProfile={navigateToUserProfile} />
        <Form onSubmit={() => { }} style={{ flexDirection: 'row' }}>
          <StyledTextField
            name={'Pesquisar'}
            buttonSearch={() => { }}
            placeholder={'Pesquisar'}
            autoCorrect={false}
            onChangeText={filter => searchEnterprise(filter)}
            onSubmitEditing={() => { }}
          />
        </Form>

        <StyledContainer>
          {isLoading && (
            <StyledLoadingView>
              <ActivityIndicator size={'large'} color={'#87CEFA'} />
            </StyledLoadingView>
          )}
          {!isLoading && !isError && !!hasData && (
            <FlatList
              data={enterpriseData}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Card
                  title={item.enterprise_name}
                  subtitle={item.enterprise_type.enterprise_type_name}
                  image={`https://empresas.ioasys.com.br/${item.photo}`}
                  onPress={() => navigateToEnterpriseDetails(item)}
                />
              )}
              contentContainerStyle={{ alignItems: 'center' }}
            />
          )}
          {!hasData && !isLoading && !isError && (
            <StyledLoadingView>
              <StyledText>Não foram encontradas Empresas</StyledText>
            </StyledLoadingView>
          )}
        </StyledContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const StyledContainer = styled.View`
  width: ${screenWidth}px;
`
const StyledLoadingView = styled.View`
  height: ${screenHeight - 250}px;
  align-items: center;
  justify-content: center;
`
const StyledText = styled.Text`
  font-style: italic;
`
const StyledTextField = styled(TextField)`
  height: 40px;
  border-radius: 20px;
  margin-left: 15px;
  align-self: flex-start;
  width: ${screenWidth - 30}px;
  margin-bottom: 10px;
`
export default HomeScreen
