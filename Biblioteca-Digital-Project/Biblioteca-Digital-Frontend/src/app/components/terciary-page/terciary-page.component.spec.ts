import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerciaryPageComponent } from './terciary-page.component';

describe('TerciaryPageComponent', () => {
  let component: TerciaryPageComponent;
  let fixture: ComponentFixture<TerciaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerciaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerciaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
