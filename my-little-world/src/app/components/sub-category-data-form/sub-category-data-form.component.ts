import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories, SubCategories} from '../../types';
import { mlwService } from '../../services/mlw.service';

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

  name!: string;
  description!: string;
  category_id!: number;
  categories: Categories[] = [];

  newSubCategoryForm!: FormGroup
  error!: string;
  

  constructor(
    private fb: FormBuilder,
    private mlwService: mlwService,
    private router: Router,
  ){
    this.newSubCategoryForm  = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: [''],
      category: new FormControl('', [Validators.required])
    })
  }

  @Output() onSubmit = new EventEmitter<SubCategories>();

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.category_id = this.currentCategoryId;
    this.categories = this.currentCategories;
  }

  onButtonClicked(): void {
    if(this.newSubCategoryForm.valid){
      const formData = this.newSubCategoryForm.value;
      this.onSubmit.emit({
        id: 0,
        uder_id: 1,
        category_id: formData.category_id,
        name: formData.name,
        description: formData.description,

      })
    }else{
      console.log('Error')
    }
  }

}
