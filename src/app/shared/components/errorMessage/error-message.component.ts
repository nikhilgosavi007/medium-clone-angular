import {Component, Input} from '@angular/core'

@Component({
  selector: 'nk-error-message',
  templateUrl: './error-message.component.html',
  standalone: true,
  imports: []
})
export class ErrorMessageComponent {
  @Input() message: string = 'Something went wrong'

  constructor() {
  }

}
