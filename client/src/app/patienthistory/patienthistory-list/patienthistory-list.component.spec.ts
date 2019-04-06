import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienthistoryListComponent } from './patienthistory-list.component';

describe('PatienthistoryListComponent', () => {
  let component: PatienthistoryListComponent;
  let fixture: ComponentFixture<PatienthistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatienthistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatienthistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
