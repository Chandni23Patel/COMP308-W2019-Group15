import { Component, OnInit } from '@angular/core';
import { AppointmentListService } from 'src/app/services/appointment-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appointment-delete',
  templateUrl: './appointment-delete.component.html',
  styleUrls: ['./appointment-delete.component.css']
})
export class AppointmentDeleteComponent implements OnInit {
  title: string;

  appointment: Appointment;
  constructor(private activateRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private appointmentListService: AppointmentListService,
    private router: Router) { }

  ngOnInit() {
    this.title = this.activateRoute.snapshot.data.title;
    this.appointment = new Appointment();

    this.activateRoute.params.subscribe(params => {
      this.appointment._id = params.id;
    });

    this.deleteAppointment(this.appointment);
  }

  deleteAppointment(appointment: Appointment): void {
    this.appointmentListService.deleteAppointment(appointment). subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/appointment/appointment-list']);
      } else {
        this.flashMessage.show('Delete appointment Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/appointment/appointment-list']);
      }
    });
  }
}
