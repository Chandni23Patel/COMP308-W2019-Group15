import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Medicine } from 'src/app/models/medicine';
import { MedicineListService } from 'src/app/services/medicine-list.service';


@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

  title: string;
  medicine: Medicine;

  constructor(
    private medicineListService: MedicineListService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.medicine = new Medicine();

    // fills in the Medicine._id property from the url
    this.activatedRoute.params.subscribe(params => {
      this.medicine._id = params.id;
    });

    if (this.title === 'Edit Medicine') {
      this.getMedicine(this.medicine);
    }

  }

  getMedicine(Medicine: Medicine): void {
    this.medicineListService.getMedicine(Medicine).subscribe(data => {
      this.medicine = data.medicine;
    });
  }

  onMedicineDetailsSubmit(): void {
    switch (this.title) {
      case 'Add Medicine':
        this.medicineListService.addMedicine(this.medicine).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/medicine/medicine-list']);
          } else {
            this.flashMessage.show('Add Medicine Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/medicine/medicine-list']);
          }
        });
        break;
      case 'Edit Medicine':
        this.medicineListService.editMedicine(this.medicine).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
            this.router.navigate(['/medicine/medicine-list']);
          } else {
            this.flashMessage.show('Edit Medicine Failed', {cssClass: 'alert-danger', timeOut: 3000});
            this.router.navigate(['/Medicine/Medicine-list']);
          }
        });
        break;
    }
  }


}
