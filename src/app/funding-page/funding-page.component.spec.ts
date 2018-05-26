import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingPageComponent } from './funding-page.component';

describe('FundingPageComponent', () => {
  let component: FundingPageComponent;
  let fixture: ComponentFixture<FundingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
