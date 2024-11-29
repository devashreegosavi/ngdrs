import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMnmtComponent } from './user-mnmt.component';

describe('UserMnmtComponent', () => {
  let component: UserMnmtComponent;
  let fixture: ComponentFixture<UserMnmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMnmtComponent]
    });
    fixture = TestBed.createComponent(UserMnmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
