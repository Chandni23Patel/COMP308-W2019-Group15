import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpatientComponent } from './headerpatient.component';

describe('HeaderpatientComponent', () => {
  let component: HeaderpatientComponent;
  let fixture: ComponentFixture<HeaderpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
