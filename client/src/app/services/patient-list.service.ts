import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Patient } from '../models/patient';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PatientListService {
  private user: User;
  private authToken: any = null;

  private endpoint = 'https://group15-project.herokuapp.com/api/patient-list/';

  // private endpoint = 'http://localhost:3000/api/patient-list/';

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

  public addPatient(patient: Patient): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.post<any>(this.endpoint + 'add', patient, this.httpOptions);
  }

  public getPatient(patient: Patient): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get<any>(this.endpoint + 'edit/' + patient._id, this.httpOptions);
  }

  public editPatient(patient: Patient): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.post<any>(this.endpoint + 'edit/' + patient._id, patient, this.httpOptions);
  }

  public deletePatient(patient: Patient): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get<any>(this.endpoint + 'delete/' + patient._id, this.httpOptions);
  }

  public loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
