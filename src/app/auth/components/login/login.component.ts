import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'

import {authActions} from '../../store/actions'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'
import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'
import {AuthStateInterface} from '../../types/authState.interface'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import {combineLatest} from 'rxjs'
import {BackendErrorMessagesComponent} from '../../../shared/components/backend-error-messages/backend-error-messages.component'

@Component({
  selector: 'nk-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorMessagesComponent
  ]
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  storeData$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  constructor(private fb: FormBuilder, private store: Store<{auth: AuthStateInterface}>) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(authActions.login({request}))
  }
}
