import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDinaComponent } from './game-dina.component';

describe('GameDinaComponent', () => {
  let component: GameDinaComponent;
  let fixture: ComponentFixture<GameDinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
