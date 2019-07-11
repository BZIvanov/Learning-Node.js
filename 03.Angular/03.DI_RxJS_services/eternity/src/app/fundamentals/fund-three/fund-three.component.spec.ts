import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundThreeComponent } from './fund-three.component';

describe('FundThreeComponent', () => {
  let component: FundThreeComponent;
  let fixture: ComponentFixture<FundThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
