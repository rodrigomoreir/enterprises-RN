import { runSaga } from 'redux-saga'
import api from '../../../src/services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { login, logout } from '../../../src/store/sagas/userSaga'

import { userActions } from '../../../src/store/slices/userSlice'

describe('enterpriseSaga', () => {
  describe('login', () => {
    const loginActionPayloadMock = {
      email: 'teste@email.com',
      password: '4321',
    }

    test('login with valid credentials', async () => {
      const dispatchedActions = []
      let persistedUser = null
      const apiReturnSuccessMock = {
        data: { name: 'Teste', email: 'teste@email.com' },
        headers: { 'access-token': '1234', client: 'client', uid: 'uid' },
      }

      const {
        'access-token': token,
        client,
        uid,
      } = apiReturnSuccessMock.headers

      const authUser = { token, client, uid }

      api.post.mockResolvedValueOnce(apiReturnSuccessMock)

      AsyncStorage.setItem.mockImplementation((key, item) => {
        persistedUser = { [key]: JSON.parse(item) }
      })

      await runSaga(
        {
          dispatch: action => dispatchedActions.push(action),
        },
        login,
        { payload: loginActionPayloadMock },
      )

      expect(api.post).toHaveBeenCalledWith(
        'users/auth/sign_in',
        loginActionPayloadMock,
      )
      expect(dispatchedActions).toContainEqual(
        userActions.loginSuccess({ data: authUser }),
      )
      expect(persistedUser).toEqual({ authUser })
    })

    test('login with invalid credentials', async () => {
      const dispatchedActions = []
      const error = 'Credenciais inválidas'

      api.post.mockRejectedValueOnce({
        response: { data: error },
      })

      await runSaga(
        {
          dispatch: action => dispatchedActions.push(action),
        },
        login,
        { payload: loginActionPayloadMock },
      )

      expect(api.post).toHaveBeenCalledWith(
        'users/auth/sign_in',
        loginActionPayloadMock,
      )
      expect(dispatchedActions).toContainEqual(
        userActions.loginFailure({ error }),
      )
    })
  })

  describe('logout', () => {
    test('logout user', async () => {
      const dispatchedActions = []

      await runSaga(
        {
          dispatch: action => dispatchedActions.push(action),
        },
        logout,
      )

      expect(dispatchedActions).toContainEqual(userActions.logoutSuccess())
    })
  })

  // describe('enterprises', () => {
  //   const enterpriseMock = [
  //     {
  //       id: 1,
  //       email_enterprise: 'enterprise@email.com',
  //       facebook: 'facebook',
  //       twitter: 'twitter',
  //       linkedin: 'linkedin',
  //       phone: '99999999',
  //       own_enterprise: 'own enterprise',
  //       enterprise_name: 'enterprise name',
  //       photo: 'photo',
  //       description: 'description',
  //       city: 'city',
  //       country: 'country',
  //       value: 'value',
  //       share_price: 'share price',
  //       enterprise_type: {
  //         id: 1,
  //         enterprise_type_name: 'enteprise type name',
  //       },
  //     },
  //   ]

  //   test('get enterprise success', async () => {
  //     const dispatchedActions = []
  //     const apiReturnSuccessMock = {
  //       data: { enterprises: enterpriseMock },
  //     }

  //     api.get.mockResolvedValueOnce(apiReturnSuccessMock)

  //     await runSaga(
  //       {
  //         dispatch: action => dispatchedActions.push(action),
  //       },
  //       getEnterprisesData,
  //       {
  //         payload: { token: '1234', client: 'client', uid: 'uid' },
  //       },
  //     )

  //     expect(api.get).toHaveBeenCalledWith('enterprises', {
  //       headers: { 'access-token': '1234', client: 'client', uid: 'uid' },
  //     })
  //     expect(dispatchedActions).toContainEqual(
  //       enterpriseActions.getEnterprisesDataSuccess({ data: enterpriseMock }),
  //     )
  //   })

  //   test('get enterprise failure', async () => {
  //     const dispatchedActions = []
  //     const error = 'error'

  //     api.get.mockRejectedValueOnce(error)

  //     await runSaga(
  //       {
  //         dispatch: action => dispatchedActions.push(action),
  //       },
  //       getEnterprisesData,
  //       {
  //         payload: { token: '1234', client: 'client', uid: 'uid' },
  //       },
  //     )

  //     expect(api.get).toHaveBeenCalledWith('enterprises', {
  //       headers: { 'access-token': '1234', client: 'client', uid: 'uid' },
  //     })
  //     expect(dispatchedActions).toContainEqual(
  //       enterpriseActions.getEnterprisesDataFailure({ error }),
  //     )
  //   })
  // })
})
