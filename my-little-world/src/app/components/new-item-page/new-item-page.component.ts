import { Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Categories, SubCategories } from '../../types';
import { ItemService } from '../../services/item.service';




@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrl: './new-item-page.component.css',
  providers: [provideNativeDateAdapter()],
})
export class NewItemPageComponent {
  categories:  Categories[] = [];
  subCategories: SubCategories[] = [];
  constructor(
    private ItemService: ItemService
  ) {}

  ngOnInit(): void{
    this.ItemService.getCategories()
      .subscribe(categories => this.categories = categories);
    this.ItemService.getSubCategories(1, 1)
      .subscribe(subCategories => this.subCategories = subCategories);
  }

}
