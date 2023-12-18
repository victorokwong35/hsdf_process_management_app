import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLeftPanelComponent } from './header-left-panel.component';

describe('HeaderLeftPanelComponent', () => {
  let component: HeaderLeftPanelComponent;
  let fixture: ComponentFixture<HeaderLeftPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLeftPanelComponent]
    });
    fixture = TestBed.createComponent(HeaderLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
