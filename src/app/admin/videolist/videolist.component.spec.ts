import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistComponent } from './videolist.component';

describe('VideolistComponent', () => {
  let component: VideolistComponent;
  let fixture: ComponentFixture<VideolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideolistComponent]
    });
    fixture = TestBed.createComponent(VideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
