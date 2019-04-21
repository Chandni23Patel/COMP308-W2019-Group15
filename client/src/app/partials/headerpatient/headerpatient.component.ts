import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';


@Component({
  selector: 'app-headerpatient',
  templateUrl: './headerpatient.component.html',
  styleUrls: ['./headerpatient.component.css']
})
export class HeaderpatientComponent implements OnInit {

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

  isRole(): string{
    let result = this.authService.LoggedIn();
    if(result) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return this.user.role;
  }
}
