import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {

  }
}
