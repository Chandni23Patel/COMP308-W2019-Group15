import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Appointment } from '../models/appointment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AppointmentListService {

  private user: User;
  private appointment: Appointment;
  private authToken: any = null;

  //private endpoint = 'https://comp308-w2019-lesson10a.herokuapp.com/api/contact-list/';

  private endpoint = 'http://localhost:3000/api/appointment/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    //this.appointment = new Appointment();
    this.user = new User();
  }

  public getList(): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get<any>(this.endpoint + 'appointment-list', this.httpOptions);
  }

  public addAppointment(appointment: Appointment): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.post<any>(this.endpoint + 'add', appointment, this.httpOptions);
  }

  public getAppointment(appointment: Appointment): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get<any>(this.endpoint + 'edit/' + appointment._id, this.httpOptions);
  }

  public editAppointment(appointment: Appointment): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.post<any>(this.endpoint + 'edit/' + appointment._id, appointment, this.httpOptions);
  }

  public deleteContact(appointment: Appointment): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get<any>(this.endpoint + 'delete/' + appointment._id, this.httpOptions);
  }

  public loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
