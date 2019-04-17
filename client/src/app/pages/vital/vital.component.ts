import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-vital',
  templateUrl: './vital.component.html',
  styleUrls: ['./vital.component.css']
})
export class VitalComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute,
    private authservice: AuthService
    ) {
    super(route);
   }

  ngOnInit() {
  }

  isLoggedIn():boolean {
    return this.authservice.LoggedIn();
  }

}
