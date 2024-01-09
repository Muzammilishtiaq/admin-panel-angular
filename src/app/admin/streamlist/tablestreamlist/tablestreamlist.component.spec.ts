import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablestreamlistComponent } from './tablestreamlist.component';

describe('TablestreamlistComponent', () => {
  let component: TablestreamlistComponent;
  let fixture: ComponentFixture<TablestreamlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablestreamlistComponent]
    });
    fixture = TestBed.createComponent(TablestreamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
