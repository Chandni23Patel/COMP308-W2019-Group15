import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalsDeleteComponent } from './vitals-delete.component';

describe('VitalsDeleteComponent', () => {
  let component: VitalsDeleteComponent;
  let fixture: ComponentFixture<VitalsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitalsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
