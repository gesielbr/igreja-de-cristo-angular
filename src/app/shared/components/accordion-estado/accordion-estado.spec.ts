import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionEstado } from './accordion-estado';

describe('AccordionEstado', () => {
  let component: AccordionEstado;
  let fixture: ComponentFixture<AccordionEstado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionEstado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionEstado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
