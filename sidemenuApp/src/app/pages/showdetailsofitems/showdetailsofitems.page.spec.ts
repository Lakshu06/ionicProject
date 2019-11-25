import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailsofitemsPage } from './showdetailsofitems.page';

describe('ShowdetailsofitemsPage', () => {
  let component: ShowdetailsofitemsPage;
  let fixture: ComponentFixture<ShowdetailsofitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdetailsofitemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdetailsofitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
