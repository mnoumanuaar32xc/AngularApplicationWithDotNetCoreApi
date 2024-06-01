import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraningListComponent } from './Features/Traning/traning-list/traning-list.component';

const routes: Routes = [
  {
    path:'Traning/tranings',
    component:TraningListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
