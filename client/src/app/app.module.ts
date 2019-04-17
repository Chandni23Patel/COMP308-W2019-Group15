// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

// services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

// route guards
import { AuthGuard } from './guards/auth.guard';
import { PatientDeleteComponent } from './patient/patient-delete/patient-delete.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { MedicineDeleteComponent } from './medicine/medicine-delete/medicine-delete.component';
import { MedicineDetailsComponent } from './medicine/medicine-details/medicine-details.component';
import { MedicineListComponent } from './medicine/medicine-list/medicine-list.component';
import { VitalsListComponent } from './vitals/vitals-list/vitals-list.component';
import { VitalsDetailsComponent } from './vitals/vitals-details/vitals-details.component';
import { VitalsDeleteComponent } from './vitals/vitals-delete/vitals-delete.component';
import { PatienthistoryDeleteComponent } from './patienthistory/patienthistory-delete/patienthistory-delete.component';
import { PatienthistoryDetailsComponent } from './patienthistory/patienthistory-details/patienthistory-details.component';
import { PatienthistoryListComponent } from './patienthistory/patienthistory-list/patienthistory-list.component';
import { AppointmentEditComponent } from './appointments/appointment-edit/appointment-edit.component';
import { AppointmentDeleteComponent } from './appointments/appointment-delete/appointment-delete.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { VitalComponent } from './pages/vital/vital.component';
import { MedicineComponent } from './pages/medicine/medicine.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { PatientComponent } from './pages/patient/patient.component';

export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactDeleteComponent,
    RegisterComponent,
    LoginComponent,
    PatientDeleteComponent,
    PatientListComponent,
    PatientDetailsComponent,
    MedicineDeleteComponent,
    MedicineDetailsComponent,
    MedicineListComponent,
    VitalsListComponent,
    VitalsDetailsComponent,
    VitalsDeleteComponent,
    PatienthistoryDeleteComponent,
    PatienthistoryDetailsComponent,
    PatienthistoryListComponent,
    AppointmentEditComponent,
    AppointmentDeleteComponent,
    AppointmentListComponent,
    VitalComponent,
    MedicineComponent,
    AppointmentComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
