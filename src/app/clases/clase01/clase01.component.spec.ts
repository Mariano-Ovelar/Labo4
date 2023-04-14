import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase01Component } from './clase01.component';

describe('Clase01Component', () => {
  let component: Clase01Component;
  let fixture: ComponentFixture<Clase01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clase01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clase01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
