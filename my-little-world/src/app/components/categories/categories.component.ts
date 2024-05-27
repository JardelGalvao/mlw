import { Component } from '@angular/core';
import { Categories } from '../../types';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  displayedColumns: string[] = ['Name', 'Description', 'Actions'];
  categories:  Categories[] = [];

  constructor(
    private ItemService: ItemService,
  ){}

  ngOnInit(): void {
    this.ItemService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  deleteCategorie(id: number): void {
    this.ItemService.deleteCategory(id)
      .subscribe(() => {
        this.categories = this.categories.filter(
          categories => categories.id !== id
        );
      });
  }
}
