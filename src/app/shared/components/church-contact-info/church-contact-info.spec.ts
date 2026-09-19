import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchContactInfo } from './church-contact-info';

describe('ChurchContactInfo', () => {
  let component: ChurchContactInfo;
  let fixture: ComponentFixture<ChurchContactInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchContactInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchContactInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
