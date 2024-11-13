import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentificationMaster } from './identificationmaster.model';
import { UserMaster } from './usermaster.model';
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

  getallstatesdata() : Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/getallstatesdata');
  }

  getdistrictbystateid(stateid:any) : Observable<any[]>{
    //const params = new HttpParams().set('id', stateid.toString());
    //console.log(params);
    return this.http.get<any[]>('http://localhost:3000/getalldistrictsdata/'+stateid);
  }

  getuserdatalist() : Observable<UserMaster>{
    return this.http.get<UserMaster>('http://localhost:3000/getallusercitizendata');
  }

  gettalukabydistrictid(districtid : any) : Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/getalltalukadata/'+districtid)
  }

  getdbpwd(usernm : any) : Observable<any[]>{
    //console.log(usernm);
    return this.http.get<any[]>('http://localhost:3000/getpwdfromdb/'+usernm)
  }

}
