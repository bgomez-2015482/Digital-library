import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofFoundComponent } from './nof-found.component';

describe('NofFoundComponent', () => {
  let component: NofFoundComponent;
  let fixture: ComponentFixture<NofFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
