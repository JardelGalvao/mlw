import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
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
    private ItemService: ItemService,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId')
    this.ItemService.getItems()
      .subscribe(items => this.items = items);
    this.ItemService.getCategories()
      .subscribe(categories => this.categories = categories);
    this.ItemService.getSubCategories(1,1)
      .subscribe(subCategories => this.subCategories = subCategories);
  }


}
