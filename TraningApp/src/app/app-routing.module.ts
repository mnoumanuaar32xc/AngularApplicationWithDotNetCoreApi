import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraningListComponent } from './Features/Traning/traning-list/traning-list.component';
import { AddTraningComponent } from './Features/Traning/add-traning/add-traning.component';
import { EditTrainingComponent } from './Features/Traning/edit-training/edit-training/EditTrainingComponent';

const routes: Routes = [
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
