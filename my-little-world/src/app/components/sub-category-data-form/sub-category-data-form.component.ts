import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Categories, Items, SubCategories} from '../../types';

@Component({
  selector: 'app-sub-category-data-form',
  templateUrl: './sub-category-data-form.component.html',
  styleUrl: './sub-category-data-form.component.css'
})
export class SubCategoryDataFormComponent {
  @Input() buttonText!: string;
  @Input() currentName!: string;
  @Input() currentDescription!: string;
  @Input() currentCategoryId!: number;
  @Input() currentCategories!: Categories[];

  categories: Categories[] = [];
  newSubCategoryForm!: FormGroup;
  items!: Items[];
  
  @Output() onSubmit = new EventEmitter<SubCategories>();
  
  constructor(
    private fb: FormBuilder,
  ){
    this.newSubCategoryForm  = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: [''],
      category: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.categories = this.currentCategories;
    this.newSubCategoryForm.get('name')?.setValue(this.currentName);
    this.newSubCategoryForm.get('description')?.setValue(this.currentDescription);
    this.newSubCategoryForm.get('category')?.setValue(this.currentCategoryId);
  }

  onButtonClicked(): void {
    if(this.newSubCategoryForm.valid){
      const formData = this.newSubCategoryForm.value;
      this.onSubmit.emit({
        id: 0,
        user_id: 1,
        category_id: formData.category,
        name: formData.name,
        description: formData.description,
      });
    }else{
      console.log('Error');
    }
  }

}
