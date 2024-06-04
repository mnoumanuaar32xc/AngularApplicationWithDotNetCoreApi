import { Component, OnDestroy } from '@angular/core';
import { AddTrainingRequest } from '../../models/add-training-request';
import { Router } from '@angular/router';
import { TraningServicesService } from '../../Services/traning-services.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-add-traning',
  templateUrl: './add-traning.component.html',
  styleUrls: ['./add-traning.component.css']
})
export class AddTraningComponent implements OnDestroy  {


  model: AddTrainingRequest;
  private addyTrainingSubscription?:Subscription;


  constructor (private router :Router, private traningService: TraningServicesService)
  {
    this.model=
    {
      Name:'',
      Lavel:''
    }

}
  onFormSubmit(){ 
   //this.categoryService.addCaterory(this.model); this will not call to api becuse we don'nt 
   // set the subscribers  need to add the subscribers


   //for  Subscription unSubscribing  
   this.addyTrainingSubscription= this.traningService.addTraning(this.model).subscribe({
      next:(response)=>{
          console.log("Success");
      },
      error:(error)=>{
        console.log('Fail');
      }
    });
    
    console.log(this.model); 
  }
  ngOnDestroy(): void {
    // when Subscription completed on destroyed callas Subscripotion will be unsubscribed
    this.addyTrainingSubscription?.unsubscribe();
  }
}
