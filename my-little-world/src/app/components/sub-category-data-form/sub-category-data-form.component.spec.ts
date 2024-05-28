import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryDataFormComponent } from './sub-category-data-form.component';

describe('SubCategoryDataFormComponent', () => {
  let component: SubCategoryDataFormComponent;
  let fixture: ComponentFixture<SubCategoryDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubCategoryDataFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubCategoryDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
