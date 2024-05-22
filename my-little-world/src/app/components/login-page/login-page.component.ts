import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  error!: string;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
  ){
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(): void {
    
   
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.AuthService.login(formData.username, formData.password)
        .subscribe(
          (response) => {
            this.router.navigateByUrl('/items');
          },
          (error) => {
            this.error = error.error.message;
          }
        );
    } else {
      console.log('Form error');
    }
  }
}
