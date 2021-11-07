import { all } from 'redux-saga/effects'

import user from './userSaga'
import enterprise from './enterpriseSaga'

function* rootSaga() {
  yield all([user(), enterprise()])
}

export default rootSaga
