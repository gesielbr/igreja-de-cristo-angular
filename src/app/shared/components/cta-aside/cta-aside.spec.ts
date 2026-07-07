import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAside } from './cta-aside';

describe('CtaAside', () => {
  let component: CtaAside;
  let fixture: ComponentFixture<CtaAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaAside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaAside);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
