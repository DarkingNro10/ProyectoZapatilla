import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesamientoDePedidosComponent } from './procesamiento-de-pedidos.component';

describe('ProcesamientoDePedidosComponent', () => {
  let component: ProcesamientoDePedidosComponent;
  let fixture: ComponentFixture<ProcesamientoDePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesamientoDePedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesamientoDePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
