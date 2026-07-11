import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSideTitle } from './section-side-title';

describe('SectionSideTitle', () => {
  let component: SectionSideTitle;
  let fixture: ComponentFixture<SectionSideTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSideTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSideTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
