import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent extends BasePageComponent  implements OnInit {

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
