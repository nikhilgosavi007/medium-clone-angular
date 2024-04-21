import {createFeature, createReducer, on} from '@ngrx/store'

import {AuthStateInterface} from '../types/authState.interface'
import {authActions} from './actions'
import {routerNavigatedAction} from '@ngrx/router-store'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(initialState,
    // REGISTER
    on(authActions.register, state => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),

    // LOGIN
    on(authActions.login, state => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),

    // ROUTER NAVIGATION
    on(routerNavigatedAction, (state) => ({...state, validationErrors: null})),

    // GET CURRENT USER
    on(authActions.getCurrentUser, state => ({
      ...state,
      isLoading: true,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser
    })),
    on(authActions.getCurrentUserFailure, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: null
    })),
  )
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectCurrentUser,
  selectIsLoading,
  selectValidationErrors
} = authFeature

