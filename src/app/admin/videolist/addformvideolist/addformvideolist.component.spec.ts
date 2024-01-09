import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformvideolistComponent } from './addformvideolist.component';

describe('AddformvideolistComponent', () => {
  let component: AddformvideolistComponent;
  let fixture: ComponentFixture<AddformvideolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddformvideolistComponent]
    });
    fixture = TestBed.createComponent(AddformvideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
