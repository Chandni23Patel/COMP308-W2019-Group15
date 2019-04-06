import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienthistoryDetailsComponent } from './patienthistory-details.component';

describe('PatienthistoryDetailsComponent', () => {
  let component: PatienthistoryDetailsComponent;
  let fixture: ComponentFixture<PatienthistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienthistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienthistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
