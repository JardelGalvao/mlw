import { Component } from '@angular/core';
import { mlwService } from '../../services/mlw.service';
import { Items, Categories, SubCategories } from '../../types';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { format } from 'date-fns';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})
export class ItemsPageComponent {
  items: Items[] = [];
  displayedColumns: string[] = ['Name', 'Categorie', 'Sub Categorie', 'Creation Date', 'Estimated Date', 'Due Date', 'Value', 'Actions'];
  categories:  Categories[] = [];
  subCategories: SubCategories[] = [];
  filteredSubCategories!: SubCategories[];
  total!: number;
  formFilter!:  FormGroup;
  
  constructor(
    private mlwService: mlwService,
    private fb : FormBuilder
  ){
    this.formFilter = this.fb.group({
      category: new FormControl(''),
      subCategory: new FormControl(''),
      startDate: [''],
      endDate: ['']
    })

    
  this.formFilter.get('startDate')?.valueChanges.subscribe(startDate =>{
    const endDateControl = this.formFilter.get('endDate');
    if (startDate) {
      endDateControl?.setValidators([Validators.required]);
    } else {
      endDateControl?.clearValidators();
    }
    endDateControl?.updateValueAndValidity();
  })
  
  }

  ngOnInit(): void {
    this.mlwService.getItems()
      .pipe(
        tap(items => this.items = items),
        map(items => items.reduce((sum, item) => sum + item.value, 0))
      )
      .subscribe(total => this.total = total);
      
    this.mlwService.getAllCategories()
      .subscribe(categories => this.categories = categories);
    this.mlwService.getAllSubCategories()
      .subscribe(subCategories => this.subCategories = subCategories);
    this.formFilter.get('category')?.valueChanges.subscribe(selectedCategoryId => {
        this.filteredSubCategories = this.subCategories.filter(subCategory => subCategory.category_id === selectedCategoryId);
    });
    
  }
  
  getSubCategoryName(id: number): string | undefined{
    const subCategory = this.subCategories.find(subCategory => subCategory.id === id);
    return subCategory?.name
  }

  getCategoryName(id: number): string | undefined{
    const category = this.categories.find(category => category.id === id);
    return category?.name
  }

  deleteItem(id: number): void{
    this.mlwService.deleteItem(id)
      .subscribe(() => {
        this.items = this.items.filter(
          items => items.id !== id,
        );
      });
  }

  onSubmit(): void{
    if(this.formFilter.valid){
      const formData = this.formFilter.value;
      const startDateFormated = formData.startDate ? format(formData.startDate, 'yyyy-MM-dd') : '0';
      const endDateFormated = formData.endDate ? format(formData.endDate, 'yyyy-MM-dd') : '0';

      this.mlwService.getItemFiltered(formData.category, formData.subCategory, startDateFormated, endDateFormated)
        .subscribe( items => this.items = items )

      this.total = this.items.reduce((sum: number, item: Items) => sum + item.value, 0)
    }
  }

}
