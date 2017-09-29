import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ViewListService } from './view-list.service';
import { AddItemComponent } from './item-list/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [
    ViewListService
  ],
  bootstrap: [
    AppComponent,
    ItemListComponent
  ]
})
export class AppModule { }
