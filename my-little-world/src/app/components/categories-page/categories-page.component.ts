import { Component } from '@angular/core';
import { Categories } from '../../types';
import { mlwService } from '../../services/mlw.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.css'
})
export class CategoriesPageComponent {
  displayedColumns: string[] = ['Name', 'Description', 'Actions'];
  categories:  Categories[] = [];

  constructor(
    private mlwService: mlwService,
  ){}

  ngOnInit(): void {
    this.mlwService.getAllCategories()
    .subscribe(categories => this.categories = categories);
  }

  deleteCategorie(id: number): void {
    this.mlwService.deleteCategory(id)
      .subscribe(() => {
        this.categories = this.categories.filter(
          categories => categories.id !== id
        );
      });
  }
}
