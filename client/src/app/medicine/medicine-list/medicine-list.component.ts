import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/models/medicine';
import { MedicineListService } from 'src/app/services/medicine-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines: Medicine[];

  constructor(
    private medicineListService: MedicineListService,
    private flashMessages: FlashMessagesService,
    private router: Router
    )
    { }

  ngOnInit() {
    this.medicines = new Array<Medicine>();

    this.displayMedicineList();
  }

  private displayMedicineList(): void {
    this.medicineListService.getList().subscribe(data => {
      if(data.success) {
        this.medicines = data.medicineList;
      } else {
        this.flashMessages.show('User must be looged-in', {cssClass: 'alert-danger', timeOut: 3000});
      }
    });
  }

  private onDeleteClick(): void {
    if(!confirm('Are You Sure?')) {
      this.router.navigate(['/medicine/medicine-list']);
    }
  }
}
