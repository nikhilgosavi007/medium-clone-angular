import {Actions, createEffect, ofType} from '@ngrx/effects'
import {inject} from '@angular/core'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {HttpErrorResponse} from '@angular/common/http'
import {PersistenceService} from '../../shared/services/persistence.service'
import {Router} from '@angular/router'

export const registerEffect = createEffect(
  (
    action$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap((register) => {
        return authService.register(register.request).pipe(map((currentUser: CurrentUserInterface) => {
            persistenceService.set('accessToken', currentUser.token)
            return authActions.registerSuccess({currentUser})
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(authActions.registerFailure({errors: errResponse.error.errors}))
          })
        )
      })
    )
  }, {functional: true})

export const redirectAfterRegisterEffect = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router)
  ) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/').catch(e => console.log('Error navigating to "/"'))
      })
    )
  },
  {functional: true, dispatch: false}
)
