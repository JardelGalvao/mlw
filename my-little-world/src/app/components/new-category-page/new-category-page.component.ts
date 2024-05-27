import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../services/item.service';
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
    private ItemService: ItemService,
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
      console.log(formData.description)
      this.ItemService.createCategory(formData.name, formData.description)
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
