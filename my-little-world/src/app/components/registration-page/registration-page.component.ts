import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  form: FormGroup;
  
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      // Here, you can also send the form data to a backend server
    } else {
      console.log('Form is invalid');
    }
}
