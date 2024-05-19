import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationPageComponent {
  form!: FormGroup;
  
  constructor(){
  }

  ngOnInit():void {
    this.form = new FormGroup({
      first_name : new FormControl(''),
      last_name : new FormControl(''),
      email : new FormControl(''),
      username : new FormControl(''),
      password : new FormControl(''),   })
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      // Here, you can also send the form data to a backend server
    } else {
      console.log('Form is invalid');
    }

  }  
}
