import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformstreamlistComponent } from './addformstreamlist.component';

describe('AddformstreamlistComponent', () => {
  let component: AddformstreamlistComponent;
  let fixture: ComponentFixture<AddformstreamlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddformstreamlistComponent]
    });
    fixture = TestBed.createComponent(AddformstreamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
