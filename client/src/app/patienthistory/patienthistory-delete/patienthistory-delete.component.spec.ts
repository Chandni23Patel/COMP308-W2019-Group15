import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienthistoryDeleteComponent } from './patienthistory-delete.component';

describe('PatienthistoryDeleteComponent', () => {
  let component: PatienthistoryDeleteComponent;
  let fixture: ComponentFixture<PatienthistoryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienthistoryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienthistoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
