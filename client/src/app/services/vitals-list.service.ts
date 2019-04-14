import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vitals } from '../models/vitals';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class VitalsListService {

  private user: User;
  private authToken: any = null;

 //private endpoint = 'https://comp308-w2019-lesson10a.herokuapp.com/api/contact-list/';

 private endpoint = 'http://localhost:3000/api/vital-list/';

 private httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
   })
 };

 constructor(private http: HttpClient) {
   this.user = new User();
 }

 public getList(): Observable<any> {
  this.loadToken();
  this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  return this.http.get<any>(this.endpoint, this.httpOptions);
}

public addVitals(vitals: Vitals): Observable<any> {
  this.loadToken();
  this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  return this.http.post<any>(this.endpoint + 'add', vitals, this.httpOptions);
}

public getVitals(vitals: Vitals): Observable<any> {
  this.loadToken();
  this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  return this.http.get<any>(this.endpoint + 'edit/' + vitals._id, this.httpOptions);
}

public editVitals(vitals: Vitals): Observable<any> {
  this.loadToken();
  this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  return this.http.post<any>(this.endpoint + 'edit/' + vitals._id, vitals, this.httpOptions);
}

public deleteVitals(vitals: Vitals): Observable<any> {
  this.loadToken();
  this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  return this.http.get<any>(this.endpoint + 'delete/' + vitals._id, this.httpOptions);
}

public loadToken() {
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}
}
