import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import { EditItemPageComponent } from './components/edit-item-page/edit-item-page.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { NewCategoryPageComponent } from './components/new-category-page/new-category-page.component';
import { SubCategoriesPageComponent } from './components/sub-categories-page/sub-categories-page.component';
import { NewSubCategoryPageComponent } from './components/new-sub-category-page/new-sub-category-page.component';
import { EditSubCategoryPageComponent } from './components/edit-sub-category-page/edit-sub-category-page.component';
import { EditCategoryPageComponent } from './components/edit-category-page/edit-category-page.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsPageComponent, pathMatch: 'full' },
  { path: 'items/:id', component: EditItemPageComponent, pathMatch: 'full' },
  { path: 'new-item', component: NewItemPageComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoriesPageComponent, pathMatch: 'full' },
  { path: 'new-category', component: NewCategoryPageComponent, pathMatch: 'full' },
  { path: 'sub-categories', component: SubCategoriesPageComponent, pathMatch: 'full' },
  { path: 'new-sub-category', component: NewSubCategoryPageComponent, pathMatch: 'full' },
  { path: 'edit-sub-category/:id', component: EditSubCategoryPageComponent, pathMatch: 'full' },
  { path: 'edit-category/:id', component: EditCategoryPageComponent, pathMatch: 'full' },
  { path: 'edit-item/:id', component: EditItemPageComponent, pathMatch: 'full' },
  { path: 'teste', component: TestComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
