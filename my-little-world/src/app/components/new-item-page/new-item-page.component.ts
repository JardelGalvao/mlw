import { Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Categories, Items, SubCategories } from '../../types';
import { mlwService } from '../../services/mlw.service';
import { Router } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrl: './new-item-page.component.css',
  providers: [provideNativeDateAdapter()],
})
export class NewItemPageComponent {
  categories:  Categories[] = [];
  subCategories: SubCategories[] = [];
  creationDate = new Date().toLocaleString('lt-LT');
  
  constructor(
    private mlwService: mlwService,
    private router: Router,
    
  ) {}

  ngOnInit(): void{
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
    this.mlwService.getAllSubCategories()
      .subscribe(subCategories => this.subCategories = subCategories);
  }

  onSubmit(item: Items): void{
    const formatedEsatimtedDate = item.estimated_date ? format(item.estimated_date, 'yyyy-MM-dd HH:mm:ss') : null;
    this.mlwService.createItem(item.name, item.description, item.category_id, item.sub_category_id, this.creationDate,formatedEsatimtedDate , item.due_date, item.update_date, item.value)
      .subscribe(() => {
        this.router.navigateByUrl('/items')
      })
  }

}
