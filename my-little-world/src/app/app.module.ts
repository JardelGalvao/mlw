import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import { EditItemPageComponent } from './components/edit-item-page/edit-item-page.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';

// Imports by me

import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// MATERIALS

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { MatCardModule } from '@angular/material/card';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { NewCategoryPageComponent } from './components/new-category-page/new-category-page.component';
import { SubCategoriesPageComponent } from './components/sub-categories-page/sub-categories-page.component';
import { NewSubCategoryPageComponent } from './components/new-sub-category-page/new-sub-category-page.component';
import { SubCategoryDataFormComponent } from './components/sub-category-data-form/sub-category-data-form.component';
import { EditSubCategoryPageComponent } from './components/edit-sub-category-page/edit-sub-category-page.component';
import { CategoryDataFormComponent } from './components/category-data-form/category-data-form.component';
import { EditCategoryPageComponent } from './components/edit-category-page/edit-category-page.component';
import { ItemDataFormComponent } from './components/item-data-form/item-data-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TestComponent } from './components/test/test.component';





@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    EditItemPageComponent,
    NewItemPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    SideNavComponent,
    CategoriesPageComponent,
    NewCategoryPageComponent,
    SubCategoriesPageComponent,
    NewSubCategoryPageComponent,
    SubCategoryDataFormComponent,
    EditSubCategoryPageComponent,
    CategoryDataFormComponent,
    EditCategoryPageComponent,
    ItemDataFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
