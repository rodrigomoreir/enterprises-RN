import { all, call, put, takeLatest } from 'redux-saga/effects'

import { enterpriseActions } from '../slices/enterpriseSlice'
import api from '../../services/api'

export function* getEnterprisesData({ payload: { token, client, uid } }) {
  try {
    const response = yield call(api.get, 'enterprises', {
      headers: { 'access-token': token, client: client, uid: uid },
    })
    const enterprises = response.data.enterprises
    yield put(
      enterpriseActions.getEnterprisesDataSuccess({ data: enterprises }),
    )
  } catch (error) {
    yield put(
      enterpriseActions.getEnterprisesDataFailure({
        error: error.response ? error.response.data : error,
      }),
    )
  }
}

export function* getEnterprisesDataFiltered({
  payload: {
    headers: { token, client, uid },
    filter,
  },
}) {
  try {
    const response = yield call(api.get, `enterprises?name=${filter}`, {
      headers: { 'access-token': token, client: client, uid: uid },
    })
    const enterprises = response.data.enterprises
    yield put(
      enterpriseActions.getEnterprisesDataSuccess({ data: enterprises }),
    )
  } catch (error) {
    console.error(error)
  }
}

export function* getEnterprisesDataFilteredType({
  payload: {
    headers: { token, client, uid },
    filter,
  },
}) {
  try {
    const response = yield call(
      api.get,
      `enterprises?enterprise_types=${filter}`,
      {
        headers: { 'access-token': token, client: client, uid: uid },
      },
    )
    const enterprises = response.data.enterprises
    yield put(
      enterpriseActions.getEnterprisesDataSuccess({ data: enterprises }),
    )
  } catch (error) {
    console.error(error)
  }
}

export default function* watcher() {
  yield all([
    takeLatest(enterpriseActions.getEnterprisesData().type, getEnterprisesData),
    takeLatest(
      enterpriseActions.getEnterprisesDataFiltered().type,
      getEnterprisesDataFiltered,
    ),
    takeLatest(
      enterpriseActions.getEnterprisesDataFilteredType().type,
      getEnterprisesDataFilteredType,
    ),
  ])
}
