import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Categories, Items, SubCategories } from '../../types';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-data-form',
  templateUrl: './item-data-form.component.html',
  styleUrl: './item-data-form.component.css'
})
export class ItemDataFormComponent {

  @Input() tittle!: string;
  @Input() buttonText!: string;
  @Input() currentName!: string;
  @Input() currentDescription!: string;
  @Input() currentCategory!: Number;
  @Input() currentSubCategory!: Number;
  @Input() currentCreationDate!: string;
  @Input() currentEstimatedDate!: string;
  @Input() currentDueDate!: string;
  @Input() currentUpdateDate!: string;
  @Input() currentAmount!: Number;
  @Input() categories!: Categories[];
  @Input() subCategories!: SubCategories[];
  filteredSubCategories!: SubCategories[];

  newItemForm!: FormGroup

  @Output() onSubmit = new EventEmitter<Items>();

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
  ){
    this.newItemForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      subCategory: new FormControl('', [Validators.required]),
      creationDate: new FormControl({value: '', disabled: true}, [Validators.required]),
      updateDate: new FormControl({value: '', disabled: true}, [Validators.required]),
      estimatedDate: new FormControl(''),
      dueDate: new FormControl(''),
      amount: new FormControl(''),
    });
  }

  ngOnInit(): void{
    this.newItemForm.get('name')?.setValue(this.currentName);
    this.newItemForm.get('description')?.setValue(this.currentDescription);
    this.newItemForm.get('category')?.setValue(this.currentCategory);
    this.newItemForm.get('subCategory')?.setValue(this.currentSubCategory);
    this.newItemForm.get('creationDate')?.setValue(this.currentCreationDate);
    this.newItemForm.get('estimatedDate')?.setValue(this.currentEstimatedDate);
    this.newItemForm.get('dueDate')?.setValue(this.currentDueDate);
    this.newItemForm.get('updateDate')?.setValue(this.currentUpdateDate);
    this.newItemForm.get('amount')?.setValue(this.currentAmount);

    this.newItemForm.get('category')?.valueChanges.subscribe(selectedCategoryId => {
      this.filteredSubCategories = this.subCategories.filter(subCategory => subCategory.category_id === selectedCategoryId);
    });
}

  onButtonClicked(): void{
    if(this.newItemForm.valid){
      const formData = this.newItemForm.value
      this.onSubmit.emit({
        id: 0,
        name: formData.name,
        description: formData.description,
        user_id: 0,
        category_id: formData.category,
        sub_category_id: formData.subCategory,
        creation_date: formData.creationDate,
        estimated_date:  formData.estimatedDate,
        due_date: formData.due_date,
        update_date: new Date().toLocaleString('lt-LT'),
        value: formData.amount,
      });
    }else{
      console.log('Error');
    }
  }

}
