import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubCategoryPageComponent } from './edit-sub-category-page.component';

describe('EditSubCategoryPageComponent', () => {
  let component: EditSubCategoryPageComponent;
  let fixture: ComponentFixture<EditSubCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSubCategoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
