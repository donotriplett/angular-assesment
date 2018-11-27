import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStarwarsComponent } from './search-starwars.component';

describe('SearchStarwarsComponent', () => {
  let component: SearchStarwarsComponent;
  let fixture: ComponentFixture<SearchStarwarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStarwarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStarwarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
