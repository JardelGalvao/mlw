import { Component, Input, Output } from '@angular/core';
import { Categories } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { mlwService } from '../../services/mlw.service';

@Component({
  selector: 'app-edit-category-page',
  templateUrl: './edit-category-page.component.html',
  styleUrl: './edit-category-page.component.css'
})
export class EditCategoryPageComponent {
  @Input() currentName!: string;
  @Input() currentDescription!: string;

  category!: Categories;

  constructor(
    private mlwService: mlwService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.mlwService.getCategory(id!)
      .subscribe(category => this.category = category);
    console.log(this.category)
  }

  onSubmit(a: Categories): void{
    
    console.log('Submitou')
  }
}
