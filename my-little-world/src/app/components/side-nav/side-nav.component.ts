import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  collapsed = false;
  itemSelected: number = 0;

  ngOnInit(): void{
    
  } 

  toggleCollapse(): void {
    this.collapsed = true;
  }

  closeSidenav(): void{
    this.collapsed = false;
  }

  selectItem(id: number): void {
    this.itemSelected = id;
  }
}
