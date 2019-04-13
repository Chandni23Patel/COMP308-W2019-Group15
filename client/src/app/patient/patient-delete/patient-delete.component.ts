import { Component, OnInit } from '@angular/core';
import { PatientListService } from 'src/app/services/patient-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {
  title: string;

  patient: Patient;

  constructor(
    private activateRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private patientListService: PatientListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.activateRoute.snapshot.data.title;
    this.patient = new Patient();

    this.activateRoute.params.subscribe(params => {
      this.patient.patientNumber = params.id;
    });

    this.deletePatient(this.patient);
  }

  deletePatient(patient: Patient): void {
    this.patientListService.deletePatient(patient). subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/patient/patient-list']);
      } else {
        this.flashMessage.show('Delete Patient Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/patient/patient-list']);
      }
    });
  }

}
