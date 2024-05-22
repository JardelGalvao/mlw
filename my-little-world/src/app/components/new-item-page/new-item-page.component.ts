import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrl: './new-item-page.component.css',
  providers: [provideNativeDateAdapter()],
})
export class NewItemPageComponent {

}
