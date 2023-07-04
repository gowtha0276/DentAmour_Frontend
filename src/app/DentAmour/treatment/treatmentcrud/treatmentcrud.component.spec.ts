import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentcrudComponent } from './treatmentcrud.component';

describe('TreatmentcrudComponent', () => {
  let component: TreatmentcrudComponent;
  let fixture: ComponentFixture<TreatmentcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
