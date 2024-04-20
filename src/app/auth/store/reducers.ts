import {createFeature, createReducer, on} from '@ngrx/store'

import {AuthStateInterface} from '../types/authState.interface'
import {authActions} from './actions'

const initialState: AuthStateInterface = {
  isSubmitting: false
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(initialState,
    on(authActions.register, state => ({...state, isSubmitting: true}))
  )
})

export const {name: authFeatureKey, reducer: authReducer, selectIsSubmitting} = authFeature

// const authReducer = createReducer(
//   initialState,
//   on(registerAction, (state): AuthStateInterface => {
//     return {
//       ...state,
//       isSubmitting: true,
//     }
//   })
// )
//
// export function reducers(state: AuthStateInterface, action: Action) {
//   return authReducer(state, action)
// }
