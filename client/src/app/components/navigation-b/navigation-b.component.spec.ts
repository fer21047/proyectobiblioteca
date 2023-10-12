import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBComponent } from './navigation-b.component';

describe('NavigationBComponent', () => {
  let component: NavigationBComponent;
  let fixture: ComponentFixture<NavigationBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBComponent]
    });
    fixture = TestBed.createComponent(NavigationBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
