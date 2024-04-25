import {Actions, createEffect, ofType} from '@ngrx/effects'
import {inject} from '@angular/core'
import {catchError, map, of, switchMap} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'
import {FeedService} from '../services/feed.service'
import {feedActions} from './actions'
import {GetFeedResponseInterface} from '../types/getFeedResponse.interface'

export const getFeedEffect = createEffect(
  (
    action$ = inject(Actions),
    feedService = inject(FeedService)
  ) => {
    return action$.pipe(
      ofType(feedActions.getFeed),
      switchMap((feedRequest) => {
        return feedService.getFeed(feedRequest.url).pipe(map((feed: GetFeedResponseInterface) => {
            return feedActions.getFeedSuccess({feed})
          }),
          catchError((errResponse: HttpErrorResponse) => {
            return of(feedActions.getFeedFailure())
          })
        )
      })
    )
  }, {functional: true})
