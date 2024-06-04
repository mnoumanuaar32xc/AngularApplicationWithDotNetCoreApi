import { Component, OnInit } from '@angular/core';
import { TraningServicesService } from '../../Services/traning-services.service';
import { training } from '../../models/Training';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-traning-list',
  templateUrl: './traning-list.component.html',
  styleUrls: ['./traning-list.component.css']
})
export class TraningListComponent  implements OnInit {
  
  constructor (private trainingService: TraningServicesService)
  {


  }

    // with subscriber 
//  training?: training[];

//   ngOnInit(): void {
//    this.trainingService.getallTrainings().subscribe({
//     next : (response)=>{
//       this.training=response;
      
//     } 

  //  });


 // with async pipe 
training$ ?: Observable<training[]>;
 ngOnInit(): void {
   this.training$=  this.trainingService.getallTrainings();
 }
}
