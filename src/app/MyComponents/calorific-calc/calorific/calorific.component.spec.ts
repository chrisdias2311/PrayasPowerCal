import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorificComponent } from './calorific.component';

describe('CalorificComponent', () => {
  let component: CalorificComponent;
  let fixture: ComponentFixture<CalorificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
