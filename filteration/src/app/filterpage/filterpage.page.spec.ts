import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterpagePage } from './filterpage.page';

describe('FilterpagePage', () => {
  let component: FilterpagePage;
  let fixture: ComponentFixture<FilterpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
