import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosListComponent } from './prestamos-list.component';

describe('PrestamosListComponent', () => {
  let component: PrestamosListComponent;
  let fixture: ComponentFixture<PrestamosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
