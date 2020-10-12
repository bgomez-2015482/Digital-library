import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanBooksComponent } from './loan-books.component';

describe('LoanBooksComponent', () => {
  let component: LoanBooksComponent;
  let fixture: ComponentFixture<LoanBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
