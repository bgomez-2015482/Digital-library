import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaryPageComponent } from './secundary-page.component';

describe('SecundaryPageComponent', () => {
  let component: SecundaryPageComponent;
  let fixture: ComponentFixture<SecundaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecundaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
