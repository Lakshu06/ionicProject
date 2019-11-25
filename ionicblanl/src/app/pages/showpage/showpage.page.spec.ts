import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpagePage } from './showpage.page';

describe('ShowpagePage', () => {
  let component: ShowpagePage;
  let fixture: ComponentFixture<ShowpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
