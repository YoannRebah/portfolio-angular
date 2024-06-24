import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/base/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss'
})

export class FormRegisterComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService)
  registerForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initRegisterFormControl();
  }

  initRegisterFormControl(): void {
    this.registerForm = this.formBuilder.group({
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', Validators.required]
    });
  }

  onSubmit(): void {
    const rowForm = this.registerForm.getRawValue();
    this.authService
      .login(rowForm.email, rowForm.password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/')
        },
        error: (e) => console.error('error onSubmit : ', e)
      })
  }

  onSubmitRegisterForm(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      console.log('Form is invalid');
    } else {
      console.log('Form Submitted!', this.registerForm.value);
      this.onSubmit();
      // Your form submission logic here
    }
  }

  onClickSubmitRegisterForm(): void {
    this.onSubmitRegisterForm();
  }

}