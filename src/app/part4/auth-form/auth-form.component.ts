// auth-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AuthFormComponent {
  authForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get email() {
    return this.authForm.get('email')!;
  }

  get password() {
    return this.authForm.get('password')!;
  }

  onSubmit() {
    if (this.authForm.valid) {
      const credentials = this.authForm.value;

      // Appel du service d'authentification
      this.authService.authenticateUser(credentials).subscribe(
        (response) => {
          this.toastr.success('Authentication successful', 'Success');

          localStorage.setItem('token', response.id);
        },
        (error) => {
          // Gestion des erreurs d'authentification
          this.toastr.error('Authentication failed. Please check your credentials.', 'Error');

        }
      );
    }
  }
}
