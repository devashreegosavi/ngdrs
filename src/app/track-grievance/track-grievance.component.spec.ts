import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackGrievanceComponent } from './track-grievance.component';

describe('TrackGrievanceComponent', () => {
  let component: TrackGrievanceComponent;
  let fixture: ComponentFixture<TrackGrievanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackGrievanceComponent]
    });
    fixture = TestBed.createComponent(TrackGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
