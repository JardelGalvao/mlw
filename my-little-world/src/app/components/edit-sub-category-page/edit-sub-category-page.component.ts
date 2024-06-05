import { Component } from '@angular/core';
import { mlwService } from '../../services/mlw.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories, SubCategories } from '../../types';

@Component({
  selector: 'app-edit-sub-category-page',
  templateUrl: './edit-sub-category-page.component.html',
  styleUrl: './edit-sub-category-page.component.css'
})
export class EditSubCategoryPageComponent {
  categories!: Categories[];
  subCategory!: SubCategories;

  constructor(
    private mlwService: mlwService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
    const id = this.route.snapshot.paramMap.get('id');
    this.mlwService.getSubCategory(id!)
      .subscribe(subCategory => this.subCategory = subCategory);
  }

  onSubmit({name, description, category_id} : {name:string, description: string, category_id: number}):void{
    this.mlwService.updateSubCategory(this.subCategory.id, name, description, category_id)
      .subscribe(() => {
        this.router.navigateByUrl('/sub-categories');
      });
  }

}
