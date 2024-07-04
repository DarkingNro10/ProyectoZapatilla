// src/app/models/pedido.ts
import { PedidoDetalle } from './pedido-detalle';
import { Cliente } from './cliente';

export class Pedido {
  id: number;
  clienteId: number;
  totalAmount: number;
  detalle: PedidoDetalle[];
  cliente: Cliente | null;

  constructor() {
    this.id = 0;
    this.clienteId = 0;
    this.totalAmount = 0;
    this.detalle = [];
    this.cliente = null;
  }
}
