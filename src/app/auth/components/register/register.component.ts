import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'

import {authActions} from '../../store/actions'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'
import {selectIsSubmitting} from '../../store/reducers'
import {AuthStateInterface} from '../../types/authState.interface'
import {AuthService} from '../../services/auth.service'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'

@Component({
  selector: 'nk-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ]
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitting$ = this.store.select(selectIsSubmitting)

  constructor(private fb: FormBuilder, private store: Store<{auth: AuthStateInterface}>, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.nonNullable.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.getRawValue())
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }
    //this.store.dispatch(registerAction({request: {user: this.form.value}}))
    this.store.dispatch(authActions.register({request}))
    //this.authService.register(request).subscribe(res => console.log(res))


  }
}
