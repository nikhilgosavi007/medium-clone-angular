import {Component, OnInit} from '@angular/core'
import {FeedComponent} from '../../../shared/components/feed/feed.component'

@Component({
  selector: 'nk-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent]
})
export class GlobalFeedComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {

  }
}
