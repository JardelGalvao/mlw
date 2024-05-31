import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mlwService } from '../../services/mlw.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories, SubCategories } from '../../types';

@Component({
  selector: 'app-new-sub-category-page',
  templateUrl: './new-sub-category-page.component.html',
  styleUrl: './new-sub-category-page.component.css'
})
export class NewSubCategoryPageComponent {
  newSubCategoryForm!: FormGroup
  error!: string;
  categories!: Categories[];

  constructor(
    private mlwService: mlwService,
    private router: Router,
  ){
  }

  onSubmit(SubCategory: SubCategories):void{
    this.mlwService.createSubCategory(SubCategory.name, SubCategory.description, SubCategory.category_id)
      .subscribe(() => {
        this.router.navigateByUrl('/sub-categories')
      })
  }

  ngOnInit(): void{
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
  }
  
}
