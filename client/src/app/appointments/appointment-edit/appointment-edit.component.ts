import { Component, OnInit } from '@angular/core';

import { AppointmentListService } from 'src/app/services/appointment-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Appointment } from 'src/app/models/appointment';
@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {
  title: string;
  appointment: Appointment;
  constructor(private appointmentListService: AppointmentListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.appointment = new Appointment();

    // fills in the Patient._id property from the url
    this.activatedRoute.params.subscribe(params => {
      this.appointment._id = params.id;
    });

    if (this.title === 'Edit Appointment') {
      this.getAppointment(this.appointment);
    }

  }

  getAppointment(Appointment: Appointment): void {
    this.appointmentListService.getAppointment(Appointment).subscribe(data => {
      this.appointment = data.appointment;
    });
  }

  onAppointmentDetailsSubmit(): void {
    switch (this.title) {
      case 'Add Appointment':
        this.appointmentListService.addAppointment(this.appointment).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/appointment/appointment-list']);
          } else {
            this.flashMessage.show('Add appointment Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/appointment/appointment-list']);
          }
        });
        break;
      case 'Edit Appointment':
        this.appointmentListService.editAppointment(this.appointment).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/appointment/appointment-list']);
          } else {
            this.flashMessage.show('Edit appointment Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/appointment/appointment-list']);
          }
        });
        break;
    }
  }
}
