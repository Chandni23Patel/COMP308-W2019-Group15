import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'COMP308-W2019-Group15';
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

  isRole(): string {
    let result = this.authService.LoggedIn();
    if(result) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return this.user.role;
  }

}
