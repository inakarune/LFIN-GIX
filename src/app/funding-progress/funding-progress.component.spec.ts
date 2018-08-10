import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingProgressComponent } from './funding-progress.component';

describe('FundingProgressComponent', () => {
  let component: FundingProgressComponent;
  let fixture: ComponentFixture<FundingProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
