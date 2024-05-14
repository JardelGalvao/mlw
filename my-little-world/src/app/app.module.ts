import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsPageComponent } from './components/items-page/items-page.component';
import { EditItemPageComponent } from './components/edit-item-page/edit-item-page.component';
import { NewItemPageComponent } from './components/new-item-page/new-item-page.component';

// Imports by me

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemsPageComponent,
    EditItemPageComponent,
    NewItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
