import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerChildComponent } from './player-child.component';

describe('PlayerChildComponent', () => {
  let component: PlayerChildComponent;
  let fixture: ComponentFixture<PlayerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
