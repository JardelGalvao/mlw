import { Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Categories, SubCategories } from '../../types';
import { mlwService } from '../../services/mlw.service';




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
    private mlwService: mlwService
  ) {}

  ngOnInit(): void{
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
    this.mlwService.getAllSubCategories()
      .subscribe(subCategories => this.subCategories = subCategories);
  }

}
