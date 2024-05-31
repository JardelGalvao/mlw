import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mlwService } from '../../services/mlw.service';
import { Router } from '@angular/router';
import { Categories } from '../../types';


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

  onSubmit(category: Categories): void{
    this.mlwService.createCategory(category.name, category.description)
      .subscribe(() => {
        this.router.navigateByUrl('/categories')
      })
  }

}
