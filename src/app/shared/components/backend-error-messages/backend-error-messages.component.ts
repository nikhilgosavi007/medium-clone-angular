import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from '../../types/backendErrors.interface'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'nk-backend-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss'
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input() backendErrors: BackendErrorsInterface  = {}

  errorMessages: string[] = []

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ')
      return `${name} ${messages}`
    })
  }
}
