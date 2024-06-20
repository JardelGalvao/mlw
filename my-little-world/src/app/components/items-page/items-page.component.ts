import { Component } from '@angular/core';
import { mlwService } from '../../services/mlw.service';
import { Items, Categories, SubCategories } from '../../types';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';




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

  formFilter!:  FormGroup;
  
  constructor(
    private mlwService: mlwService,
    private fb : FormBuilder
  ){
    this.formFilter = this.fb.group({
      category: new FormControl(''),
      subCategory: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.mlwService.getItems()
      .subscribe(items => this.items = items);
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
      const formData = this.formFilter.value
      this.mlwService.getItemFiltered(formData.category, formData.subCategory)
        .subscribe( items => this.items = items )
    }
    else{
      console.log('err')
    }
  }

}
