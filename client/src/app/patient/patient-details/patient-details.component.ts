import { Component, OnInit } from '@angular/core';
import { PatientListService } from 'src/app/services/patient-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  title: string;
  patient: Patient;

  constructor(
    private patientListService: PatientListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.patient = new Patient();

    // fills in the Patient._id property from the url
    this.activatedRoute.params.subscribe(params => {
      this.patient.patientNumber = params.patientNumber;
    });

    if (this.title === 'Edit Patient') {
      this.getPatient(this.patient);
    }

  }

  getPatient(Patient: Patient): void {
    this.patientListService.getPatient(Patient).subscribe(data => {
      this.patient = data.patient;
    });
  }

  onPatientDetailsSubmit(): void {
    switch (this.title) {
      case 'Add Patient':
        this.patientListService.addPatient(this.patient).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/patient/patient-list']);
          } else {
            this.flashMessage.show('Add Patient Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/patient/patient-list']);
          }
        });
        break;
      case 'Edit Patient':
        this.patientListService.editPatient(this.patient).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/patient/patient-list']);
          } else {
            this.flashMessage.show('Edit Patient Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/patient/patient-list']);
          }
        });
        break;
    }
  }

}
