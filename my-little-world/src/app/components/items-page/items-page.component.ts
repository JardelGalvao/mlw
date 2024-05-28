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
  displayedColumns: string[] = ['Name', 'Categorie', 'Sub Categorie', 'Creation Date', 'Estimated Date', 'Due Date', 'Value'];
  categories:  Categories[] = [];
  subCategories: SubCategories[] = [];
  
  constructor(
    private mlwService: mlwService,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(): void {
    this.mlwService.getItems()
      .subscribe(items => this.items = items);
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
    this.mlwService.getAllSubCategories()
      .subscribe(subCategories => this.subCategories = subCategories);
  }


}
