// modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { VitalsListComponent } from './vitals/vitals-list/vitals-list.component';
import { VitalsDetailsComponent } from './vitals/vitals-details/vitals-details.component';
import { VitalsDeleteComponent } from './vitals/vitals-delete/vitals-delete.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientDeleteComponent } from './patient/patient-delete/patient-delete.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentEditComponent } from './appointments/appointment-edit/appointment-edit.component';
import { AppointmentDeleteComponent } from './appointments/appointment-delete/appointment-delete.component';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { MedicineDeleteComponent } from './medicine/medicine-delete/medicine-delete.component';
import { MedicineDetailsComponent } from './medicine/medicine-details/medicine-details.component';
import { PatienthistoryListComponent } from './patienthistory/patienthistory-list/patienthistory-list.component';
import { PatienthistoryDeleteComponent } from './patienthistory/patienthistory-delete/patienthistory-delete.component';
import { PatienthistoryDetailsComponent } from './patienthistory/patienthistory-details/patienthistory-details.component';

const routes: Routes = [
//basic path for site
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
//contact path
  {path: 'contact/contact-list', component: ContactListComponent, data: {title: 'Contact List'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/add', component: ContactDetailsComponent, data: {title: 'Add Contact'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/edit/:id', component: ContactDetailsComponent, data: {title: 'Edit Contact'}, canActivate: [AuthGuard]},
  {path: 'contact/contact-list/delete/:id', component: ContactDeleteComponent, data: {title: 'Delete Contact'}, canActivate: [AuthGuard]},
//patient path
  {path: 'patient/patient-list', component: PatientListComponent, data: {title: 'Patient List'}, canActivate: [AuthGuard]},
  {path: 'patient/patient-list/add', component: PatientDetailsComponent, data: {title: 'Add Patient'}, canActivate: [AuthGuard]},
  {path: 'patient/patient-list/edit/:id', component: PatientDetailsComponent, data: {title: 'Edit Patient'}, canActivate: [AuthGuard]},
  {path: 'patient/patient-list/delete/:id', component: PatientDeleteComponent, data: {title: 'Delete Patient'}, canActivate: [AuthGuard]},

//appointments path
  {path: 'appointment/appointment-list', component: AppointmentListComponent, data: {title: 'Appointment List'}, canActivate: [AuthGuard]},
  {path: 'appointment/appointment-list/add', component: AppointmentEditComponent, data: {title: 'Add Appointment'}, canActivate: [AuthGuard]},
  {path: 'appointment/appointment-list/edit/:id', component: AppointmentEditComponent, data: {title: 'Edit Appointment'}, canActivate: [AuthGuard]},
  {path: 'appointment/appointment-list/delete/:id', component: AppointmentDeleteComponent, data: {title: 'Delete Appointment'}, canActivate: [AuthGuard]},

//patienthistory path
  {path: 'patienthistory/patienthistory-list', component: PatienthistoryListComponent, data: {title: 'Patient History List'}, canActivate: [AuthGuard]},
  {path: 'patienthistory/patienthistory-list/add', component: PatienthistoryDetailsComponent, data: {title: 'Add Patient History'}, canActivate: [AuthGuard]},
  {path: 'patienthistory/patienthistory-list/edit/:id', component: PatienthistoryDetailsComponent, data: {title: 'Edit patient History'}, canActivate: [AuthGuard]},
  {path: 'patienthistory/patienthistory-list/delete/:id', component: PatienthistoryDeleteComponent, data: {title: 'Delete Patient History'}, canActivate: [AuthGuard]},
//medicine path
  {path: 'medicine/medicine-list', component: MedicineListComponent, data: {title: 'Medicine List'}, canActivate: [AuthGuard]},
  {path: 'medicine/medicine-list/add', component: MedicineDetailsComponent, data: {title: 'Add Medicine'}, canActivate: [AuthGuard]},
  {path: 'medicine/medicine-list/edit/:id', component: MedicineDetailsComponent, data: {title: 'Edit Medicine'}, canActivate: [AuthGuard]},
  {path: 'medicine/medicine-list/delete/:id', component: MedicineDeleteComponent, data: {title: 'Delete Medicine'}, canActivate: [AuthGuard]},
//Vitals path
  {path: 'vital/vital-list', component: VitalsListComponent, data: {title: 'Vital List'}, canActivate: [AuthGuard]},
  {path: 'vital/vital-list/add', component: VitalsDetailsComponent, data: {title: 'Add Vitals'}, canActivate: [AuthGuard]},
  {path: 'vital/vital-list/edit/:id', component: VitalsDetailsComponent, data: {title: 'Edit Vitals'}, canActivate: [AuthGuard]},
  {path: 'vital/vital-list/delete/:id', component: VitalsDeleteComponent, data: {title: 'Delete Vitals'}, canActivate: [AuthGuard]},
//login and registration path
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},
//default path
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
