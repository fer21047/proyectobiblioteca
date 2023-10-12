import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUComponent } from './navigation-u.component';

describe('NavigationUComponent', () => {
  let component: NavigationUComponent;
  let fixture: ComponentFixture<NavigationUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationUComponent]
    });
    fixture = TestBed.createComponent(NavigationUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
