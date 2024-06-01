import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Component/navbar/navbar.component';
import { TraningListComponent } from './Features/Traning/traning-list/traning-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TraningListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
