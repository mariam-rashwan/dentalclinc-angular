import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPillComponent } from './patient-pill.component';

describe('PatientPillComponent', () => {
  let component: PatientPillComponent;
  let fixture: ComponentFixture<PatientPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
