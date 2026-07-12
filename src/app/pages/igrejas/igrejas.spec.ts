import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Igrejas } from './igrejas';

describe('Igrejas', () => {
  let component: Igrejas;
  let fixture: ComponentFixture<Igrejas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Igrejas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Igrejas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
