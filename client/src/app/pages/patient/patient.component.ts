import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent extends BasePageComponent  implements OnInit {

  user: User;

  constructor(
    route: ActivatedRoute,
    private authservice: AuthService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {
    super(route);
  }

  ngOnInit() {
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn():boolean {
    return this.authservice.LoggedIn();
  }



  isPatient(): boolean{
    let result = this.authService.LoggedIn();
    let report = false;
    if(result) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    if(this.user.role == "Patient")
    {
      report = true;
    }
    return report;
  }
}
