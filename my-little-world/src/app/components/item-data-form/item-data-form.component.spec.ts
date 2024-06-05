import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDataFormComponent } from './item-data-form.component';

describe('ItemDataFormComponent', () => {
  let component: ItemDataFormComponent;
  let fixture: ComponentFixture<ItemDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDataFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
