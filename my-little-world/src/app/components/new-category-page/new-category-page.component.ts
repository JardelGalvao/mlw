import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mlwService } from '../../services/mlw.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-category-page',
  templateUrl: './new-category-page.component.html',
  styleUrl: './new-category-page.component.css'
})
export class NewCategoryPageComponent {
  newCategoryForm!: FormGroup
  error!: string;

  constructor( 
    private fb: FormBuilder,
    private mlwService: mlwService,
    private router: Router,
  ){
    this.newCategoryForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: [''] 
    })
  }

  onSubmit(){
    if(this.newCategoryForm.valid){
      const formData = this.newCategoryForm.value;
      this.mlwService.createCategory(formData.name, formData.description)
        .subscribe(
          (response) => {
            this.router.navigateByUrl('/categories');
          },
          (error) => {
            this.error = error.error.message;
          }
        );
    }
    else{
      console.log('Form error');
    }
  }


}
