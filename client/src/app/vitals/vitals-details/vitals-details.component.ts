import { Component, OnInit } from '@angular/core';
import { VitalsListService } from 'src/app/services/vitals-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Vitals } from 'src/app/models/vitals';
@Component({
  selector: 'app-vitals-details',
  templateUrl: './vitals-details.component.html',
  styleUrls: ['./vitals-details.component.css']
})
export class VitalsDetailsComponent implements OnInit {
  title: string;
  vitals: Vitals;

  constructor(
    private vitalsListService: VitalsListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.vitals = new Vitals();

    // fills in the contact._id property from the url
    this.activatedRoute.params.subscribe(params => {
      this.vitals._id = params.id;
    });

    if (this.title === 'Edit Vitals') {
      this.getVitals(this.vitals);
    }

  }

  getVitals(vitals: Vitals): void {
    this.vitalsListService.getVitals(vitals).subscribe(data => {
      this.vitals = data.vitals;
    });
  }

  onVitalsDetailsSubmit(): void {
    switch (this.title) {
      case 'Add Vitals':
        this.vitalsListService.addVitals(this.vitals).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/vital/vital-list']);
          } else {
            this.flashMessage.show('Add Vitals Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/vital/vital-list']);
          }
        });
        break;
      case 'Edit Vitals':
        this.vitalsListService.editVitals(this.vitals).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/vital/vital-list']);
          } else {
            this.flashMessage.show('Edit Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/vital/vital-list']);
          }
        });
        break;
    }
  }

}
