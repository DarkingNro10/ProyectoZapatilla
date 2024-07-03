import { PedidoDetalle } from './pedido-detalle';
import { Cliente } from './cliente';

export class Pedido {
  id: number;
  serie: string;
  numero: string;
  descripcion: string;
  clienteId: number;
  detalle: PedidoDetalle[];
  cliente: Cliente;

  constructor() {
    this.id = 0;
    this.serie = '';
    this.numero = '';
    this.descripcion = '';
    this.clienteId = 0;
    this.detalle = [];
    this.cliente = new Cliente();
  }
}
