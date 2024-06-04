import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Component/navbar/navbar.component';
import { TraningListComponent } from './Features/Traning/traning-list/traning-list.component';
import { AddTraningComponent } from './Features/Traning/add-traning/add-traning.component';
import { FormsModule } from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EditTrainingComponent } from './Features/Traning/edit-training/edit-training/EditTrainingComponent';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TraningListComponent,
    AddTraningComponent,
    EditTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
