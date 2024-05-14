import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Items } from '../../types';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent {
  items: Items[] = [];
  
  constructor(
    private ItemsService: ItemService,
  ){}

  ngOnInit(): void {
    this.ItemsService.getItems()
      .subscribe(items => this.items = items);
  }
}
