import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StrongPasswordRegx } from '../../StrongPasswordRegx';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationPageComponent {
  registrationForm!: FormGroup;
  error!: string;

  
  
  constructor(
      private fb: FormBuilder,
      private AuthService: AuthService,
      private router: Router,
    ){
    this.registrationForm = this.fb.group({
      first_name : new FormControl('', [Validators.required]),
      last_name : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      username : new FormControl('', [Validators.required, Validators.minLength(6)]),
      password : new FormControl('', [Validators.required, Validators.pattern(StrongPasswordRegx)]),
    });
  }

  ngOnInit():void {
  }


  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.AuthService.createUser(formData.first_name, formData.last_name, formData.email, formData.username, formData.password)
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
