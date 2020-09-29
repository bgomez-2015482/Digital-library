import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMagazineComponent } from './delete-magazine.component';

describe('DeleteMagazineComponent', () => {
  let component: DeleteMagazineComponent;
  let fixture: ComponentFixture<DeleteMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
