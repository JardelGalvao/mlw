import { Component, Input, Output } from '@angular/core';
import { Categories, SubCategories } from '../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { mlwService } from '../../services/mlw.service';


@Component({
  selector: 'app-edit-category-page',
  templateUrl: './edit-category-page.component.html',
  styleUrl: './edit-category-page.component.css'
})
export class EditCategoryPageComponent {
  category!: Categories;

  constructor(
    private mlwService: mlwService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void{
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.mlwService.getCategory(categoryId!)
      .subscribe(category => this.category = category);
  }

  onSubmit({name, description} : {name:string, description: string}): void{
    this.mlwService.updateCategory(this.category.id, name, description)
      .subscribe(() =>{
        this.router.navigateByUrl('/categories');
      })

  }
}
