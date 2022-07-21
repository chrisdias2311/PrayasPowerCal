import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateAnalysisComponent } from './ultimate-analysis.component';

describe('UltimateAnalysisComponent', () => {
  let component: UltimateAnalysisComponent;
  let fixture: ComponentFixture<UltimateAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimateAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
