import { Component } from '@angular/core';
import { Items } from '../../types';
import { mlwService } from '../../services/mlw.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item-page',
  templateUrl: './edit-item-page.component.html',
  styleUrl: './edit-item-page.component.css'
})
export class EditItemPageComponent {
  item!: Items;

  constructor(
    private mlwService: mlwService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void{
    const itemId = this.route.snapshot.paramMap.get('id');
    this.mlwService.getItem(itemId!)
      .subscribe(item => this.item = item);
  }
}
