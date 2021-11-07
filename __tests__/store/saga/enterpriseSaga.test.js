import { runSaga } from 'redux-saga'
import api from '../../../src/services/api'

import { getEnterprisesData } from '../../../src/store/sagas/enterpriseSaga'
import { enterpriseActions } from '../../../src/store/slices/enterpriseSlice'

describe('enterpriseSaga', () => {
  describe('enterprises', () => {
    const enterpriseMock = [
      {
        id: 1,
        email_enterprise: 'enterprise@email.com',
        facebook: 'facebook',
        twitter: 'twitter',
        linkedin: 'linkedin',
        phone: '99999999',
        own_enterprise: 'own enterprise',
        enterprise_name: 'enterprise name',
        photo: 'photo',
        description: 'description',
        city: 'city',
        country: 'country',
        value: 'value',
        share_price: 'share price',
        enterprise_type: {
          id: 1,
          enterprise_type_name: 'enteprise type name',
        },
      },
    ]

    test('get enterprise success', async () => {
      const dispatchedActions = []
      const apiReturnSuccessMock = {
        data: { enterprises: enterpriseMock },
      }

      api.get.mockResolvedValueOnce(apiReturnSuccessMock)

      await runSaga(
        {
          dispatch: action => dispatchedActions.push(action),
        },
        getEnterprisesData,
        {
          payload: { token: '1234', client: 'client', uid: 'uid' },
        },
      )

      expect(api.get).toHaveBeenCalledWith('enterprises', {
        headers: { 'access-token': '1234', client: 'client', uid: 'uid' },
      })
      expect(dispatchedActions).toContainEqual(
        enterpriseActions.getEnterprisesDataSuccess({ data: enterpriseMock }),
      )
    })

    test('get enterprise failure', async () => {
      const dispatchedActions = []
      const error = 'error'

      api.get.mockRejectedValueOnce(error)

      await runSaga(
        {
          dispatch: action => dispatchedActions.push(action),
        },
        getEnterprisesData,
        {
          payload: { token: '1234', client: 'client', uid: 'uid' },
        },
      )

      expect(api.get).toHaveBeenCalledWith('enterprises', {
        headers: { 'access-token': '1234', client: 'client', uid: 'uid' },
      })
      expect(dispatchedActions).toContainEqual(
        enterpriseActions.getEnterprisesDataFailure({ error }),
      )
    })

    test('get enterprise filtered success', async () => {
      const dispatchedActions = []
      const apiReturnSuccessMock = {
        data: { enterprises: enterpriseMock },
      }

      api.get.mockResolvedValueOnce(apiReturnSuccessMock)

      await runSaga(
        {
          dispatch: action => dispatchedActions.push(action),
        },
        getEnterprisesData,
        {
          payload: { token: '1234', client: 'client', uid: 'uid' },
        },
      )

      expect(api.get).toHaveBeenCalledWith('enterprises', {
        headers: { 'access-token': '1234', client: 'client', uid: 'uid' },
      })
      expect(dispatchedActions).toContainEqual(
        enterpriseActions.getEnterprisesDataSuccess({ data: enterpriseMock }),
      )
    })

    test('get enterprise filtered failure', async () => {
      const dispatchedActions = []
      const error = 'error'

      api.get.mockRejectedValueOnce(error)

      await runSaga(
        {
          dispatch: action => dispatchedActions.push(action),
        },
        getEnterprisesData,
        {
          payload: { token: '1234', client: 'client', uid: 'uid' },
        },
      )

      expect(api.get).toHaveBeenCalledWith('enterprises', {
        headers: { 'access-token': '1234', client: 'client', uid: 'uid' },
      })
      expect(dispatchedActions).toContainEqual(
        enterpriseActions.getEnterprisesDataFailure({ error }),
      )
    })
  })
})
