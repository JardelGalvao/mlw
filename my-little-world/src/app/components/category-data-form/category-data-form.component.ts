import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Categories } from '../../types';

@Component({
  selector: 'app-category-data-form',
  templateUrl: './category-data-form.component.html',
  styleUrl: './category-data-form.component.css'
})
export class CategoryDataFormComponent {
  @Input() buttonText!: string;
  @Input() currentName!: string;
  @Input() currentDescription!: string;
  @Input() tittle!: string;

  newCategoryForm!: FormGroup

  @Output() onSubmit = new EventEmitter<Categories>();

  constructor(
    private fb: FormBuilder,
  ){
    this.newCategoryForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: [''],
    });
  }

  ngOnInit(): void {
    this.newCategoryForm.get('name')?.setValue(this.currentName);
    this.newCategoryForm.get('description')?.setValue(this.currentDescription);
  }

  onButtonClicked(): void {
    if(this.newCategoryForm.valid){
      const formData = this.newCategoryForm.value;
      this.onSubmit.emit({
        id: 0,
        user_id: 0,
        name: formData.name,
        description: formData.description
      })
    }else{
      console.log('Error');
    }
  }

}
