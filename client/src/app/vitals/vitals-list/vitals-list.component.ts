import { Component, OnInit } from '@angular/core';
import { VitalsListService } from 'src/app/services/vitals-list.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Vitals } from 'src/app/models/vitals';
@Component({
  selector: 'app-vitals-list',
  templateUrl: './vitals-list.component.html',
  styleUrls: ['./vitals-list.component.css']
})
export class VitalsListComponent implements OnInit {

  vitals: Vitals[];

  constructor(
    private vitalsListService: VitalsListService,
    private flashMessages: FlashMessagesService,
    private router: Router
    )
    { }

  ngOnInit() {
    this.vitals = new Array<Vitals>();

    this.displayVitalsList();
  }

  private displayVitalsList(): void {
    this.vitalsListService.getList().subscribe(data => {
      if(data.success) {
        this.vitals = data.vitalsList;
      } else {
        this.flashMessages.show('User must be looged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/vitals/vitals-list']);
    }
  }

}
