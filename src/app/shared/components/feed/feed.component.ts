import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {feedActions} from './store/actions'
import {combineLatest} from 'rxjs'
import {selectError, selectFeedData, selectIsLoading} from './store/reducers'
import {FeedStateInterface} from './types/feedState.interface'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'
import {ErrorMessageComponent} from '../errorMessage/error-message.component'
import {LoadingComponent} from '../loading/loading.component'

@Component({
  selector: 'nk-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, ErrorMessageComponent, LoadingComponent]
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = ''

  storeData$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData)
  })

  constructor(private store: Store<{feed: FeedStateInterface}>) {
  }

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))
  }
}
