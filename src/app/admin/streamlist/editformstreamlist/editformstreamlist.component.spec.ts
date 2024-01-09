import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformstreamlistComponent } from './editformstreamlist.component';

describe('EditformstreamlistComponent', () => {
  let component: EditformstreamlistComponent;
  let fixture: ComponentFixture<EditformstreamlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditformstreamlistComponent]
    });
    fixture = TestBed.createComponent(EditformstreamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
