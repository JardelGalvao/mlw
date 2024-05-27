import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import { EditItemPageComponent } from './components/edit-item-page/edit-item-page.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NewCategoryPageComponent } from './components/new-category-page/new-category-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsPageComponent, pathMatch: 'full' },
  { path: 'items/:id', component: EditItemPageComponent, pathMatch: 'full' },
  { path: 'new-item', component: NewItemPageComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent, pathMatch: 'full' },
  { path: 'new-category', component: NewCategoryPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
