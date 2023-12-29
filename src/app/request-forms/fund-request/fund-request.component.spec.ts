import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundRequestComponent } from './fund-request.component';

describe('FundRequestComponent', () => {
  let component: FundRequestComponent;
  let fixture: ComponentFixture<FundRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundRequestComponent]
    });
    fixture = TestBed.createComponent(FundRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
