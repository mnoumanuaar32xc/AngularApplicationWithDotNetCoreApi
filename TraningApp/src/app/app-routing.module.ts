import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraningListComponent } from './Features/Traning/traning-list/traning-list.component';
import { AddTraningComponent } from './Features/Traning/add-traning/add-traning.component';
import { EditTrainingComponent } from './Features/Traning/edit-training/edit-training/EditTrainingComponent';
import { LoginComponent } from './Features/auth/login/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'Traning/tranings',
    component:TraningListComponent
  },
  {
    path:'traning/AddNewTraning',
    component:AddTraningComponent
  },
  {path:'traning/EditTraing/:id',
  component:EditTrainingComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
