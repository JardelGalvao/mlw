import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubCategoryPageComponent } from './new-sub-category-page.component';

describe('NewSubCategoryPageComponent', () => {
  let component: NewSubCategoryPageComponent;
  let fixture: ComponentFixture<NewSubCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSubCategoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSubCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
