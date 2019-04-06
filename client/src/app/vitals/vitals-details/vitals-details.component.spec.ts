import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalsDetailsComponent } from './vitals-details.component';

describe('VitalsDetailsComponent', () => {
  let component: VitalsDetailsComponent;
  let fixture: ComponentFixture<VitalsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
