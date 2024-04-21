import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {Store} from '@ngrx/store'
import {TopBarComponent} from './shared/components/topBar/top-bar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {

  }
}
