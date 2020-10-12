import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanMagazinesComponent } from './loan-magazines.component';

describe('LoanMagazinesComponent', () => {
  let component: LoanMagazinesComponent;
  let fixture: ComponentFixture<LoanMagazinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanMagazinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
