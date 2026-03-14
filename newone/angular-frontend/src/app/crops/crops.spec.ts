import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crops } from './crops';

describe('Crops', () => {
  let component: Crops;
  let fixture: ComponentFixture<Crops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crops);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
