import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubScoreboardComponent } from './github-scoreboard.component';

describe('GithubScoreboardComponent', () => {
  let component: GithubScoreboardComponent;
  let fixture: ComponentFixture<GithubScoreboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubScoreboardComponent]
    });
    fixture = TestBed.createComponent(GithubScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
