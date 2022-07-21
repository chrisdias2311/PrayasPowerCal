import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SulphurComponent } from './sulphur.component';

describe('SulphurComponent', () => {
  let component: SulphurComponent;
  let fixture: ComponentFixture<SulphurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SulphurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SulphurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
