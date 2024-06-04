import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { training } from '../models/Training';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddTrainingRequest } from '../models/add-training-request';
import { UpdateTrainingRequest } from '../models/update-training-request';

import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class TraningServicesService {

  constructor( private http : HttpClient) { }
getallTrainings() : Observable<training[]>{ 
  return this.http.get<training[]>(`${environment.apiBaseUrl}/api/Training`);
}
gettrainingById( id : string): Observable<training>
{
  return this.http.get<training>(`${environment.apiBaseUrl}/api/Training/${id}`);
}
addTraning(model: AddTrainingRequest): Observable<void> {  
  return this.http.post<void>(`${environment.apiBaseUrl}/api/Training`, model );
}

updateTraining(id: string , updateTrainingRequest: UpdateTrainingRequest): 
Observable<training>{
 
  // Make the POST request with the correct structure
  return this.http.put<training>(`${environment.apiBaseUrl}/api/Training/${id}`, updateTrainingRequest);
}
daleteTraining(id: string): Observable<training> {
    // Make the POST request with the correct structure
    //return this.http.delete<training>(`${environment.apiBaseUrl}/api/Training/${id}` );
    
  return this.http.delete<training>(`${environment.apiBaseUrl}/api/Training/${id}`);

  
}

}
