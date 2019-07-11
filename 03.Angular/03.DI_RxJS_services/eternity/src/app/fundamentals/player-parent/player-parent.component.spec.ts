import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerParentComponent } from './player-parent.component';

describe('PlayerParentComponent', () => {
  let component: PlayerParentComponent;
  let fixture: ComponentFixture<PlayerParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
