import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablevideolistComponent } from './tablevideolist.component';

describe('TablevideolistComponent', () => {
  let component: TablevideolistComponent;
  let fixture: ComponentFixture<TablevideolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablevideolistComponent]
    });
    fixture = TestBed.createComponent(TablevideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
