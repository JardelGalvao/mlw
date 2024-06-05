import { Component } from '@angular/core';
import { Categories, SubCategories } from '../../types';
import { mlwService } from '../../services/mlw.service';


@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent {
  displayedColumns: string[] = ['Name', 'Description', 'Actions'];
  categories:  Categories[] = [];
  subCategories: SubCategories[] = [];

  constructor(
    private mlwService: mlwService,
  ){}

  ngOnInit(): void {
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
    this.mlwService.getAllSubCategories()
      .subscribe(subCategories => this.subCategories = subCategories);
  }

  isCategoryInSubCategories(categoryCode: number): boolean {
    return this.subCategories.some(subCategory => subCategory.category_id === categoryCode);
  }

  deleteCategory(id: number): void {
    this.mlwService.deleteCategory(id)
      .subscribe(() => {
        this.categories = this.categories.filter(
          categories => categories.id !== id,
        )
    });
  }
}
