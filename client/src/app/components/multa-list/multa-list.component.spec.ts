import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultaListComponent } from './multa-list.component';

describe('MultaListComponent', () => {
  let component: MultaListComponent;
  let fixture: ComponentFixture<MultaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultaListComponent]
    });
    fixture = TestBed.createComponent(MultaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
