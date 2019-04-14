import { Component, OnInit } from '@angular/core';
import { MedicineListService } from 'src/app/services/medicine-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Medicine } from 'src/app/models/medicine';

@Component({
  selector: 'app-medicine-delete',
  templateUrl: './medicine-delete.component.html',
  styleUrls: ['./medicine-delete.component.css']
})
export class MedicineDeleteComponent implements OnInit {

  title: string;

  medicine: Medicine;

  constructor(
    private activateRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private medicineListService: MedicineListService,
    private router: Router
  ) { }

  ngOnIn
  ngOnInit(): void {

    this.title = this.activateRoute.snapshot.data.title;
    this.medicine = new Medicine();

    this.activateRoute.params.subscribe(params => {
      this.medicine._id = params.id;
    });

    this.deleteMedicine(this.medicine);
  }

  deleteMedicine(medicine: Medicine): void {
    this.medicineListService.deleteMedicine(medicine). subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeOut: 3000});
        this.router.navigate(['/medicine/medicine-list']);
      } else {
        this.flashMessage.show('Delete Medicine Failed', {cssClass: 'alert-danger', timeOut: 3000});
        this.router.navigate(['/medicine/medicine-list']);
      }
    });
  }

}
