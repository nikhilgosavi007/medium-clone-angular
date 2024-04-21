import {Component} from '@angular/core'
import {AuthStateInterface} from '../../../auth/types/authState.interface'
import {Store} from '@ngrx/store'
import {selectCurrentUser} from '../../../auth/store/reducers'
import {combineLatest} from 'rxjs'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'


@Component({
  selector: 'nk-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class TopBarComponent {

  storeData$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  })

  constructor(private store: Store<{auth: AuthStateInterface}>) {}

}
