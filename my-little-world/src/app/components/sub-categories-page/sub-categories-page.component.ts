import { Component } from '@angular/core';
import { Categories, Items, SubCategories } from '../../types';
import { mlwService } from '../../services/mlw.service';

@Component({
  selector: 'app-sub-categories-page',
  templateUrl: './sub-categories-page.component.html',
  styleUrl: './sub-categories-page.component.css'
})
export class SubCategoriesPageComponent {
  displayedColumns: string[] = ['Name', 'Description', 'Category', 'Actions'];
  categories:  Categories[] = [];
  subCategories: SubCategories[] = [];
  items!: Items[];

  constructor(
    private mlwService: mlwService,
  ){
  
  }

  ngOnInit(): void {
    this.mlwService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.mlwService.getAllSubCategories().subscribe(subCategories => {
        this.subCategories = subCategories.map(subCategory => {
          const category = this.categories.find(cat => cat.id === subCategory.category_id)
          return { ...subCategory, categoryName: category ? category.name : 'Unknown' };
        });
      });
    });
    this.mlwService.getItems()
      .subscribe(items => this.items = items);
  }

  isItemInSubCategories(subCategoryCode: number): boolean {
    return this.items.some(item => item.sub_category_id === subCategoryCode);
  }

  deleteSubCategorie(id: number): void {
    this.mlwService.deleteSubCategory(id)
      .subscribe(() => {
        this.subCategories = this.subCategories.filter(
          SubCategorie => SubCategorie.id !== id
        );
    });
  }
}
