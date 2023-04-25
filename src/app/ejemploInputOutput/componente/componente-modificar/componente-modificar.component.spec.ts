import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteModificarComponent } from './componente-modificar.component';

describe('ComponenteModificarComponent', () => {
  let component: ComponenteModificarComponent;
  let fixture: ComponentFixture<ComponenteModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
