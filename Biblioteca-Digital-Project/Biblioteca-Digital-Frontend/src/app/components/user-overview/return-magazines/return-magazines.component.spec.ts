import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnMagazinesComponent } from './return-magazines.component';

describe('ReturnMagazinesComponent', () => {
  let component: ReturnMagazinesComponent;
  let fixture: ComponentFixture<ReturnMagazinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnMagazinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
