import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, last } from 'rxjs';
import { TraningServicesService } from 'src/app/Features/Services/traning-services.service';
import { training } from 'src/app/Features/models/Training';
import { UpdateTrainingRequest } from 'src/app/Features/models/update-training-request';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.css']
})
export class EditTrainingComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private traningServices: TraningServicesService,
    private router: Router

  ) { }

  id: string | null = null;
  paramSubscription?: Subscription;
  editTrainingSubscription?: Subscription;
  deleteTrainingSubscription?:Subscription;
    training?: training;
 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          // get the data form API for this catagory ID
          this.traningServices.gettrainingById(this.id).subscribe({
            next: (response => {
              this.training = response;

            })
          });

        }

      }
    });
 
  }
  onFormSubmit():void{
    console.log(this.training);
    
    
const updateTrainingRequest: UpdateTrainingRequest={
  Name: this.training?.name ??'',
  Lavel : this.training?.lavel ?? ''
}

// pass this object to Service APi 
if(this.id)
  {
  this.editTrainingSubscription=  this.traningServices.updateTraining(this.id,updateTrainingRequest)
    .subscribe({
next:(response)=>this.router.navigateByUrl('/Traning/tranings')

    })
    ;
  
  }

    }

    
onDelete():void{
  if (this.id)
    {
  
      this.deleteTrainingSubscription= this.traningServices.daleteTraining(this.id).subscribe({
  
        next:(response)=>this.router.navigateByUrl('/Traning/tranings')
  
      });
    }
  
}
ngOnDestroy(): void {
   
  this.paramSubscription?.unsubscribe();
  this.editTrainingSubscription?.unsubscribe();
  this.deleteTrainingSubscription?.unsubscribe();
  }
}
