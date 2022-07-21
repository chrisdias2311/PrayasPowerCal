import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorificCalcComponent } from './calorific-calc.component';

describe('CalorificCalcComponent', () => {
  let component: CalorificCalcComponent;
  let fixture: ComponentFixture<CalorificCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorificCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorificCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
