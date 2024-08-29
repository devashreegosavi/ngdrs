import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridDialogComponent } from './data-grid-dialog.component';

describe('DataGridDialogComponent', () => {
  let component: DataGridDialogComponent;
  let fixture: ComponentFixture<DataGridDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataGridDialogComponent]
    });
    fixture = TestBed.createComponent(DataGridDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
