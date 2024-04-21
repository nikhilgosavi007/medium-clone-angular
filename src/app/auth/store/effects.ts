import {Actions, createEffect, ofType} from '@ngrx/effects'
import {inject} from '@angular/core'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {HttpErrorResponse} from '@angular/common/http'

export const registerEffect = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService)) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap((register) => {
        return authService.register(register.request).pipe(map((currentUser: CurrentUserInterface) => {

            return authActions.registerSuccess({currentUser})
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(authActions.registerFailure({errors: errResponse.error.errors}))
          })
        )
      })
    )
  }, {functional: true})
