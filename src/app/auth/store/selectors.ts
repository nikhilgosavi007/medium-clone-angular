import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'

// export const authFeatureSelector =
//   createFeatureSelector<AuthStateInterface>('auth')

export const selectFeature = (state: {auth: AuthStateInterface}) => state.auth

export const selectIsSubmitting = createSelector(selectFeature,
  (state) => state.isSubmitting)

// export const isSubmittingSelector = createSelector(
//   authFeatureSelector,
//   (authState: AuthStateInterface) => authState.isSubmitting
// )
