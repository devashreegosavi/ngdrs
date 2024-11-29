import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsearchComponent } from './esearch.component';

describe('EsearchComponent', () => {
  let component: EsearchComponent;
  let fixture: ComponentFixture<EsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsearchComponent]
    });
    fixture = TestBed.createComponent(EsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
