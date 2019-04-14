import { Component, OnInit } from '@angular/core';
import { VitalsListService } from 'src/app/services/vitals-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Vitals } from 'src/app/models/vitals';
@Component({
  selector: 'app-vitals-delete',
  templateUrl: './vitals-delete.component.html',
  styleUrls: ['./vitals-delete.component.css']
})
export class VitalsDeleteComponent implements OnInit {

  title: string;

  vitals: Vitals;

  constructor(
    private activateRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private vitalsListService: VitalsListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activateRoute.snapshot.data.title;
    this.vitals = new Vitals();

    this.activateRoute.params.subscribe(params => {
      this.vitals._id = params.id;
    });

    this.deleteVitals(this.vitals);
  }

  deleteVitals(vitals: Vitals): void {
    this.vitalsListService.deleteVitals(vitals). subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/vital/vital-list']);
      } else {
        this.flashMessage.show('Vitals data detete Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/vital/vital-list']);
      }
    });
  }



}
