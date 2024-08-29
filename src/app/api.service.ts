import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentificationMaster } from './identificationmaster.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { }

  getidentificationdetails() : Observable<IdentificationMaster[]>{
    return this.http.get<IdentificationMaster[]>('http://localhost:3000/identificationdata');
  }

  getallusercitizendata() : Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/getallusercitizendata');
  }
}
