import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingConditionComponent } from './funding-condition.component';

describe('FundingConditionComponent', () => {
  let component: FundingConditionComponent;
  let fixture: ComponentFixture<FundingConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
