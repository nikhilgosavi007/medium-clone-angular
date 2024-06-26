import {Component, OnInit} from '@angular/core'
import {FeedComponent} from '../../../shared/components/feed/feed.component'
import {BannerComponent} from '../../../shared/components/banner/banner.component'

@Component({
  selector: 'nk-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent]
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles'
  constructor() {
  }

  ngOnInit(): void {

  }
}
