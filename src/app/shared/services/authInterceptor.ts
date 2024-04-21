import {HttpInterceptorFn} from '@angular/common/http'
import {inject} from '@angular/core'
import {PersistenceService} from './persistence.service'

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const persistenceServe = inject(PersistenceService)
  const token = persistenceServe.get('accessToken')
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : ''
    }
  })
  return next(request)
}
