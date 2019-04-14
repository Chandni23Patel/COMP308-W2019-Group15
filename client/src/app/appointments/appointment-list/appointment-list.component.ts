import { Component, OnInit } from '@angular/core';
import { AppointmentListService } from 'src/app/services/appointment-list.service';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Appointment } from 'src/app/models/appointment';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[];

  constructor(private appointmentListService: AppointmentListService,
    private flashMessages: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.appointments = new Array<Appointment>();

    this.displayAppointmentList();
  }

  private displayAppointmentList(): void {
    console.log("inside display appointments");
    this.appointmentListService.getList().subscribe(data => {
      if(data.success) {
        this.appointments = data.appointments;
      } else {
        this.flashMessages.show('User must be logged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/appointment/appointment-list']);
    }
  }

}