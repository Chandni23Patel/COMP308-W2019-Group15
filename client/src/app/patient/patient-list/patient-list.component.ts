import { Component, OnInit } from '@angular/core';
import { PatientListService } from 'src/app/services/patient-list.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[];

  constructor(
    private patientListService: PatientListService,
    private flashMessages: FlashMessagesService,
    private router: Router
    )
    { }

  ngOnInit() {
    this.patients = new Array<Patient>();

    this.displayPatientList();
  }

  private displayPatientList(): void {
    this.patientListService.getList().subscribe(data => {
      if(data.success) {
        this.patients = data.patientList;
      } else {
        this.flashMessages.show('User must be looged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/patient/patient-list']);
    }
  }

}
