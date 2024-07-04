// src/app/models/pedido-detalle.ts
import { Producto } from './produc';

export class PedidoDetalle {
  id: number;
  productoId: number;
  cantidad: number;
  subtotal: number;
  producto: Producto | null;

  constructor() {
    this.id = 0;
    this.productoId = 0;
    this.cantidad = 0;
    this.subtotal = 0;
    this.producto = null;
  }
}
