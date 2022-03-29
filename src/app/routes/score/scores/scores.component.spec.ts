import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreScoresComponent } from './scores.component';

describe('ScoreScoresComponent', () => {
  let component: ScoreScoresComponent;
  let fixture: ComponentFixture<ScoreScoresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
