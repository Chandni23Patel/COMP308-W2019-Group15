import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Medicine } from '../models/medicine';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MedicineListService {
  private user: User;
  private authToken: any = null;

  //private endpoint = 'https://comp308-w2019-lesson10a.herokuapp.com/api/medicine-list/';

  private endpoint = 'https://dashboard.heroku.com/group15-project/api/medicine-list';

 // private endpoint = 'http://localhost:3000/api/medicine-list/';

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

  public addMedicine(medicine: Medicine): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.post<any>(this.endpoint + 'add', medicine, this.httpOptions);
  }

  public getMedicine(medicine: Medicine): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get<any>(this.endpoint + 'edit/' + medicine._id, this.httpOptions);
  }

  public editMedicine(medicine: Medicine): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.post<any>(this.endpoint + 'edit/' + medicine._id, medicine, this.httpOptions);
  }

  public deleteMedicine(medicine: Medicine): Observable<any> {
    this.loadToken();
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    return this.http.get<any>(this.endpoint + 'delete/' + medicine._id, this.httpOptions);
  }

  public loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
