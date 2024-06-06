import { Component } from '@angular/core';
import { Items } from '../../types';
import { mlwService } from '../../services/mlw.service';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';

@Component({
  selector: 'app-edit-item-page',
  templateUrl: './edit-item-page.component.html',
  styleUrl: './edit-item-page.component.css'
})
export class EditItemPageComponent {
  item!: Items;
  updateDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  constructor(
    private mlwService: mlwService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void{
    const itemId = this.route.snapshot.paramMap.get('id');
    this.mlwService.getItem(itemId!)
      .subscribe(item => this.item = item);
  }

  onSubmit(item: Items): void{
    this.mlwService.updateItem(this.item.id, item.name, item.description, item.category_id, item.sub_category_id, format(item.estimated_date, 'yyyy-MM-dd HH:mm:ss'), this.updateDate, item.due_date, item.value)
    .subscribe(() => {
      this.router.navigateByUrl('/items')
    })}
}
