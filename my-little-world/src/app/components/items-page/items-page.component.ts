import { Component } from '@angular/core';
import { mlwService } from '../../services/mlw.service';
import { Items, Categories, SubCategories } from '../../types';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent {
  items: Items[] = [];
  displayedColumns: string[] = ['Name', 'Categorie', 'Sub Categorie', 'Creation Date', 'Estimated Date', 'Due Date', 'Value', 'Actions'];
  categories:  Categories[] = [];
  subCategories: SubCategories[] = [];
  
  constructor(
    private mlwService: mlwService,
  ){}
  
  ngOnInit(): void {
    this.mlwService.getItems()
      .subscribe(items => this.items = items);
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
    this.mlwService.getAllSubCategories()
      .subscribe(subCategories => this.subCategories = subCategories);
  }
  
  getSubCategoryName(id: number): string | undefined{
    const subCategory = this.subCategories.find(subCategory => subCategory.id === id);
    return subCategory?.name
  }

  getCategoryName(id: number): string | undefined{
    const category = this.categories.find(category => category.id === id);
    return category?.name
  }

  deleteItem(id: number): void{
    this.mlwService.deleteItem(id)
      .subscribe(() => {
        this.items = this.items.filter(
          items => items.id !== id,
        );
      });
  }

}
