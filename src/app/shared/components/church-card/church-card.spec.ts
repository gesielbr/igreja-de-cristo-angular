import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchCard } from './church-card';

describe('ChurchCard', () => {
  let component: ChurchCard;
  let fixture: ComponentFixture<ChurchCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
