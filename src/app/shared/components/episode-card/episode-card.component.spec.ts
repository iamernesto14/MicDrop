import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeCardComponent } from './episode-card.component';

describe('EpisodeCardComponent', () => {
  let component: EpisodeCardComponent;
  let fixture: ComponentFixture<EpisodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
