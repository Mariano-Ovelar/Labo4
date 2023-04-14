import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase02Component } from './clase02.component';

describe('Clase02Component', () => {
  let component: Clase02Component;
  let fixture: ComponentFixture<Clase02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clase02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clase02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
