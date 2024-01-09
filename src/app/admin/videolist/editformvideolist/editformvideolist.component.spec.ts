import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformvideolistComponent } from './editformvideolist.component';

describe('EditformvideolistComponent', () => {
  let component: EditformvideolistComponent;
  let fixture: ComponentFixture<EditformvideolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditformvideolistComponent]
    });
    fixture = TestBed.createComponent(EditformvideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
