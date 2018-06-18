import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealingHogaTableComponent } from './dealing-hoga-table.component';

describe('DealingHogaTableComponent', () => {
  let component: DealingHogaTableComponent;
  let fixture: ComponentFixture<DealingHogaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealingHogaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealingHogaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
