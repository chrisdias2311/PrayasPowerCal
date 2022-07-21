import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximateAnalysisComponent } from './proximate-analysis.component';

describe('ProximateAnalysisComponent', () => {
  let component: ProximateAnalysisComponent;
  let fixture: ComponentFixture<ProximateAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximateAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximateAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
