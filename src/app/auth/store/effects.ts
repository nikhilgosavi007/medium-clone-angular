import {Actions, createEffect, ofType} from '@ngrx/effects'
import {inject} from '@angular/core'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import {catchError, map, of, switchMap} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'

export const registerEffect = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService)) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap((register) => {
        return authService.register(register.request).pipe(map((currentUser: CurrentUserInterface) => {
            return authActions.registerSuccess({currentUser})
          }),
          catchError(() => {
            return of(authActions.registerFailure())
          })
        )
      })
    )
  }, {functional: true})
