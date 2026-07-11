import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTitle } from './side-title';

describe('SideTitle', () => {
  let component: SideTitle;
  let fixture: ComponentFixture<SideTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
