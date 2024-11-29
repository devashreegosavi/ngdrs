import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertCopyComponent } from './cert-copy.component';

describe('CertCopyComponent', () => {
  let component: CertCopyComponent;
  let fixture: ComponentFixture<CertCopyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertCopyComponent]
    });
    fixture = TestBed.createComponent(CertCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
