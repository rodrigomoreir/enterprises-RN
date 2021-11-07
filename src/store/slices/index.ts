import user, { userState } from './userSlice'
import enterprise, { enterpriseState } from './enterpriseSlice'

export const globalState = {
  user: userState,
  enterprise: enterpriseState,
}

export default { user, enterprise }
