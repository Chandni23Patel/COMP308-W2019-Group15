import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user = new User();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onLogoutClick(): boolean {
    this.authService.logout().subscribe(data => {
      this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 5000});
      this.router.navigate(['/login']);
    });
    return false;
  }

  isLoggedIn(): boolean {
    let result = this.authService.LoggedIn();
    if(result) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return result;
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

  isNotRole(): boolean{
    return true;
  }

  isRoleName(): string{
    let result = this.authService.LoggedIn();
    if(result) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return this.user.role;
  }
}
