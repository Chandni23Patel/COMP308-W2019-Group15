import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientsDetailComponent implements OnInit {

  patients = {};

  constructor(private route: ActivatedRoute, private router: Router, private fs: FsService) { }

  ngOnInit() {
    this.getPatientsDetails(this.route.snapshot.params['id']);
  }

  getPatientsDetails(id) {
    this.fs.getPatient(id)
      .subscribe(data => {
        console.log(data);
        this.patients = data;
      });
  }

  deletePatients(id) {
    this.fs.deletePatients(id)
      .subscribe(res => {
          this.router.navigate(['/patients']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
