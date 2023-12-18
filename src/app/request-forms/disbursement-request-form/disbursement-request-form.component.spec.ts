import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementRequestFormComponent } from './disbursement-request-form.component';

describe('DisbursementRequestFormComponent', () => {
  let component: DisbursementRequestFormComponent;
  let fixture: ComponentFixture<DisbursementRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisbursementRequestFormComponent]
    });
    fixture = TestBed.createComponent(DisbursementRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
